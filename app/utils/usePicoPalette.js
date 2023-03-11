import colors from "~/data/colors.json";

// Get the color object from the color family and shade
const getColor = ({ family, shade }) => {
  return colors[family][shade];
};

// Get the hex value from the color object
export const getHexValue = ({ family, shade }) => {
  return getColor({ family, shade }).hex;
};

// Get the rgb value from the color object
export const getRgbValue = ({ family, shade }) => {
  return getColor({ family, shade }).rgb;
};

// Get the color name from the color object
export const getColorName = ({ family, shade }) => {
  return getColor({ family, shade }).name;
};

// Get the main hex value from the color family
export const getMainHexValue = ({ family }) => {
  return getColor({ family, shade: "main" }).hex;
};

// Get the the main color shade index
export const getMainColorShade = ({ family }) => {
  const mainHexValue = getMainHexValue({ family });
  const shades = getColorShades({ family });
  const shadeIndex = shades.findIndex((shade) => {
    return getHexValue({ family, shade }) === mainHexValue;
  });
  return shades[shadeIndex];
};

// Get the color family and shade indexes
const getFamilyAndShadeIndexes = ({ family, shade }) => {
  const families = Object.keys(colors);
  const shades = Object.keys(colors[family]).filter((shade) => shade !== "main");

  const familyIndex = families.indexOf(family);
  const shadeIndex = shades.indexOf(shade);

  return { familyIndex, shadeIndex, families, shades };
};

// Get the next color ({ family, shade }) from the current color ({ family, shade })
export const getNextColor = ({ family, shade }) => {
  const { familyIndex, shadeIndex, families, shades } = getFamilyAndShadeIndexes({ family, shade });

  if (shadeIndex === shades.length - 1) {
    if (familyIndex === families.length - 1) {
      return {
        family: families[0],
        shade: shades[0],
      };
    } else {
      return {
        family: families[familyIndex + 1],
        shade: shades[0],
      };
    }
  } else {
    return {
      family: family,
      shade: shades[shadeIndex + 1],
    };
  }
};

// Get the previous color ({ family, shade }) from the current color ({ family, shade })
export const getPreviousColor = ({ family, shade }) => {
  const { familyIndex, shadeIndex, families, shades } = getFamilyAndShadeIndexes({ family, shade });

  if (shadeIndex === 0) {
    if (familyIndex === 0) {
      return {
        family: families[families.length - 1],
        shade: shades[shades.length - 1],
      };
    } else {
      return {
        family: families[familyIndex - 1],
        shade: shades[shades.length - 1],
      };
    }
  } else {
    return {
      family: family,
      shade: shades[shadeIndex - 1],
    };
  }
};

// Get the color from the next color family, keeping the same shade
export const getColorFromNextColorFamily = ({ family, shade }) => {
  const { familyIndex, families } = getFamilyAndShadeIndexes({ family, shade });

  if (familyIndex === families.length - 1) {
    return {
      family: families[0],
      shade: shade,
    };
  } else {
    return {
      family: families[familyIndex + 1],
      shade: shade,
    };
  }
};

// Get the color from the previous color family, keeping the same shade
export const getColorFromPreviousColorFamily = ({ family, shade }) => {
  const { familyIndex, families } = getFamilyAndShadeIndexes({ family, shade });

  if (familyIndex === 0) {
    return {
      family: families[families.length - 1],
      shade: shade,
    };
  } else {
    return {
      family: families[familyIndex - 1],
      shade: shade,
    };
  }
};

// Get families
export const getColorFamilies = () => {
  return Object.keys(colors);
};

// Get family's shades
export const getColorShades = ({ family }) => {
  return Object.keys(colors[family]).filter((shade) => shade !== "main");
};

// Get color palette
export const getColorPalette = () => {
  const colorPalette = {};
  const colorFamilies = getColorFamilies();
  colorFamilies.forEach((family) => {
    colorPalette[family] = {};
    const shades = getColorShades({ family });
    shades.forEach((shade) => {
      if (shade !== "main") {
        colorPalette[family][shade] = colors[family][shade].hex;
      }
    });
  });

  return colorPalette;
};
