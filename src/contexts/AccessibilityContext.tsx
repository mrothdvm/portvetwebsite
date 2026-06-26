import React, { createContext, useContext, useState, useEffect } from 'react';

type FontSize = 'small' | 'medium' | 'large' | 'extra-large';
type LineSpacing = 'normal' | 'relaxed' | 'loose';

interface AccessibilitySettings {
  fontSize: FontSize;
  lineSpacing: LineSpacing;
  highContrast: boolean;
  linkHighlighting: boolean;
  reducedMotion: boolean;
}

interface AccessibilityContextType extends AccessibilitySettings {
  setFontSize: (size: FontSize) => void;
  setLineSpacing: (spacing: LineSpacing) => void;
  setHighContrast: (enabled: boolean) => void;
  setLinkHighlighting: (enabled: boolean) => void;
  setReducedMotion: (enabled: boolean) => void;
  resetSettings: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'medium',
  lineSpacing: 'normal',
  highContrast: false,
  linkHighlighting: false,
  reducedMotion: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const stored = localStorage.getItem('accessibility-settings');
    if (stored) {
      try {
        return { ...defaultSettings, ...JSON.parse(stored) };
      } catch {
        return defaultSettings;
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
    
    // Apply settings to document
    const root = document.documentElement;
    root.setAttribute('data-font-size', settings.fontSize);
    root.setAttribute('data-line-spacing', settings.lineSpacing);
    root.setAttribute('data-high-contrast', settings.highContrast.toString());
    root.setAttribute('data-link-highlighting', settings.linkHighlighting.toString());
    root.setAttribute('data-reduced-motion', settings.reducedMotion.toString());
  }, [settings]);

  const setFontSize = (fontSize: FontSize) => {
    setSettings(prev => ({ ...prev, fontSize }));
  };

  const setLineSpacing = (lineSpacing: LineSpacing) => {
    setSettings(prev => ({ ...prev, lineSpacing }));
  };

  const setHighContrast = (highContrast: boolean) => {
    setSettings(prev => ({ ...prev, highContrast }));
  };

  const setLinkHighlighting = (linkHighlighting: boolean) => {
    setSettings(prev => ({ ...prev, linkHighlighting }));
  };

  const setReducedMotion = (reducedMotion: boolean) => {
    setSettings(prev => ({ ...prev, reducedMotion }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        ...settings,
        setFontSize,
        setLineSpacing,
        setHighContrast,
        setLinkHighlighting,
        setReducedMotion,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
