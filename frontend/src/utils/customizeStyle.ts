import type { FontType, SizeType, WeightType } from "@/constants/menuData";
import { fontMap, fontSizeMap, fontWeightMap } from "@/constants/menuData";

export const setCustomStyle = (
  fontFamily?: FontType,
  fontSize?: SizeType,
  fontWeight?: WeightType
) => {
  return [
    fontMap[fontFamily || "--font-playfair"],
    fontSizeMap[fontSize || 4],
    fontWeightMap[fontWeight || 4],
  ];
};
