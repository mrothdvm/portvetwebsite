import { useState, useEffect, useRef } from 'react';
import { Accessibility, X, Type, Eye, Zap, RotateCcw, Link as LinkIcon, AlignJustify } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { useToast } from '@/hooks/use-toast';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const { toast } = useToast();
  
  const { 
    fontSize, 
    lineSpacing,
    highContrast, 
    linkHighlighting,
    reducedMotion, 
    setFontSize, 
    setLineSpacing,
    setHighContrast, 
    setLinkHighlighting,
    setReducedMotion, 
    resetSettings 
  } = useAccessibility();

  // Check if first visit for pulse animation
  useEffect(() => {
    const hasVisited = localStorage.getItem('accessibility-widget-visited');
    if (!hasVisited) {
      setShowPulse(true);
      const timer = setTimeout(() => {
        setShowPulse(false);
        localStorage.setItem('accessibility-widget-visited', 'true');
      }, 9000); // 3 pulses at 3s each
      return () => clearTimeout(timer);
    }
  }, []);

  // Keyboard shortcut (Alt+A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (isOpen && panelRef.current) {
      const firstButton = panelRef.current.querySelector('button');
      firstButton?.focus();
    } else if (!isOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !panelRef.current) return;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = panelRef.current!.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const fontSizeOptions = [
    { value: 'small', label: 'Small', description: 'Compact text for more content' },
    { value: 'medium', label: 'Medium', description: 'Standard text size (default)' },
    { value: 'large', label: 'Large', description: 'Larger text for easier reading' },
    { value: 'extra-large', label: 'Extra Large', description: 'Maximum text size' },
  ] as const;

  const lineSpacingOptions = [
    { value: 'normal', label: 'Normal', description: 'Standard line height (1.5)' },
    { value: 'relaxed', label: 'Relaxed', description: 'More spacing between lines (1.75)' },
    { value: 'loose', label: 'Loose', description: 'Maximum line spacing (2.0)' },
  ] as const;

  const handleSettingChange = (settingName: string) => {
    toast({
      title: "Setting Updated",
      description: `${settingName} has been changed`,
      duration: 2000,
    });
  };

  // Check if any non-default settings are active
  const hasActiveSettings = 
    fontSize !== 'medium' || 
    lineSpacing !== 'normal' || 
    highContrast || 
    linkHighlighting || 
    reducedMotion;

  return (
    <div className="fixed bottom-24 left-4 z-50 sm:bottom-6 sm:left-6" role="region" aria-label="Accessibility settings">
      {isOpen && (
        <Card 
          ref={panelRef}
          id="accessibility-panel"
          className="mb-3 w-80 p-4 shadow-lg animate-scale-in" 
          role="dialog" 
          aria-label="Accessibility controls"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading font-bold text-lg flex items-center gap-2">
              <Accessibility size={20} aria-hidden="true" />
              Accessibility
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility panel"
            >
              <X size={18} aria-hidden="true" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Font Size */}
            <div>
              <Label className="flex items-center gap-2 mb-2 font-semibold">
                <Type size={16} aria-hidden="true" />
                Font Size
              </Label>
              <p className="text-xs text-muted-foreground mb-2">Adjust text size for comfortable reading</p>
              <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-label="Font size options">
                {fontSizeOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={fontSize === option.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setFontSize(option.value);
                      handleSettingChange('Font size');
                    }}
                    className="w-full"
                    role="radio"
                    aria-checked={fontSize === option.value}
                    title={option.description}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Line Spacing */}
            <div>
              <Label className="flex items-center gap-2 mb-2 font-semibold">
                <AlignJustify size={16} aria-hidden="true" />
                Line Spacing
              </Label>
              <p className="text-xs text-muted-foreground mb-2">Increase spacing between lines of text</p>
              <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label="Line spacing options">
                {lineSpacingOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={lineSpacing === option.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => {
                      setLineSpacing(option.value);
                      handleSettingChange('Line spacing');
                    }}
                    className="w-full"
                    role="radio"
                    aria-checked={lineSpacing === option.value}
                    title={option.description}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="high-contrast" className="flex items-center gap-2 font-semibold cursor-pointer">
                  <Eye size={16} aria-hidden="true" />
                  High Contrast
                </Label>
                <p className="text-xs text-muted-foreground mt-1">Enhanced color contrast for better visibility</p>
              </div>
              <Switch
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={(checked) => {
                  setHighContrast(checked);
                  handleSettingChange('High contrast mode');
                }}
                aria-label="Toggle high contrast mode"
              />
            </div>

            {/* Link Highlighting */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="link-highlighting" className="flex items-center gap-2 font-semibold cursor-pointer">
                  <LinkIcon size={16} aria-hidden="true" />
                  Link Highlighting
                </Label>
                <p className="text-xs text-muted-foreground mt-1">Underline and highlight all clickable links</p>
              </div>
              <Switch
                id="link-highlighting"
                checked={linkHighlighting}
                onCheckedChange={(checked) => {
                  setLinkHighlighting(checked);
                  handleSettingChange('Link highlighting');
                }}
                aria-label="Toggle link highlighting"
              />
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="reduced-motion" className="flex items-center gap-2 font-semibold cursor-pointer">
                  <Zap size={16} aria-hidden="true" />
                  Reduced Motion
                </Label>
                <p className="text-xs text-muted-foreground mt-1">Minimize animations and transitions</p>
              </div>
              <Switch
                id="reduced-motion"
                checked={reducedMotion}
                onCheckedChange={(checked) => {
                  setReducedMotion(checked);
                  handleSettingChange('Reduced motion');
                }}
                aria-label="Toggle reduced motion"
              />
            </div>

            {/* Reset */}
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                resetSettings();
                toast({
                  title: "Settings Reset",
                  description: "All accessibility settings restored to defaults",
                  duration: 2000,
                });
              }}
              aria-label="Reset all accessibility settings to default"
            >
              <RotateCcw size={16} className="mr-2" aria-hidden="true" />
              Reset to Defaults
            </Button>

            {/* Keyboard Shortcut Hint */}
            <p className="text-xs text-center text-muted-foreground pt-2 border-t">
              Keyboard shortcut: <kbd className="px-2 py-1 bg-muted rounded text-xs">Alt + A</kbd>
            </p>
          </div>
        </Card>
      )}

      <div className="relative">
        <Button
          ref={toggleButtonRef}
          size="icon"
          className={`h-14 w-14 rounded-full shadow-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 ${showPulse ? 'animate-accessibility-pulse' : ''}`}
          onClick={() => {
            setIsOpen(!isOpen);
            if (showPulse) setShowPulse(false);
          }}
          aria-label={isOpen ? 'Close accessibility settings' : 'Open accessibility settings'}
          aria-expanded={isOpen}
          aria-controls="accessibility-panel"
        >
          <Accessibility size={24} aria-hidden="true" />
        </Button>
        {hasActiveSettings && (
          <span 
            className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent border-2 border-background"
            aria-label="Active accessibility settings"
            title="Custom accessibility settings are active"
          />
        )}
      </div>
    </div>
  );
};

export default AccessibilityWidget;
