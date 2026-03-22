import {
  Shield,
  Layers,
  Crosshair,
  AlignCenter,
  Scissors,
  Activity,
  ShieldPlus,
  Monitor,
  Scan,
  Box,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { ElementType } from "react";

export const iconMap: Record<string, ElementType> = {
  Shield,
  Layers,
  Crosshair,
  AlignCenter,
  Scissors,
  Activity,
  ShieldPlus,
  Monitor,
  Scan,
  Box,
  Sparkles,
  Wrench,
};

export function getCategoryIcon(iconName: string): ElementType {
  return iconMap[iconName] || Wrench;
}
