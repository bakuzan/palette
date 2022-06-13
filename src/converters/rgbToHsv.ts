function rgbToValue(...rgb: number[]) {
  return Math.max(...rgb);
}

function rgbToWhiteness(...rgb: number[]) {
  return Math.min(...rgb);
}

function rgbToHue(rgbR: number, rgbG: number, rgbB: number) {
  const value = rgbToValue(rgbR, rgbG, rgbB);
  const whiteness = rgbToWhiteness(rgbR, rgbG, rgbB);
  const delta = value - whiteness;

  if (delta) {
    // calculate segment
    const segment =
      value === rgbR
        ? (rgbG - rgbB) / delta
        : value === rgbG
        ? (rgbB - rgbR) / delta
        : (rgbR - rgbG) / delta;

    // calculate shift
    const shift =
      value === rgbR
        ? segment < 0
          ? 360 / 60
          : 0 / 60
        : value === rgbG
        ? 120 / 60
        : 240 / 60;

    // calculate hue
    return (segment + shift) * 60;
  } else {
    // fallback case
    return 0;
  }
}
export default function rgbToHsv(rgba: number[]) {
  const [rgbR, rgbG, rgbB, alpha] = rgba;
  const hsvV = rgbToValue(rgbR, rgbG, rgbB);
  const hsvW = rgbToWhiteness(rgbR, rgbG, rgbB);
  const hsvH = rgbToHue(rgbR, rgbG, rgbB);

  // calculate saturation
  const hsvS = hsvV === hsvW ? 0 : ((hsvV - hsvW) / hsvV) * 100;

  const output = [hsvH, hsvS, hsvV];
  if (alpha !== undefined) {
    output.push(alpha);
  }

  return output;
}

// export default function rgbToHsv(rgba: number[]) {
//   const red = rgba[0] / 255;
//   const green = rgba[1] / 255;
//   const blue = rgba[2] / 255;
//   const alpha = rgba[3];

//   const max = Math.max(red, green, blue);
//   const min = Math.min(red, green, blue);

//   let h = 0;
//   const v = max;

//   const d = max - min;
//   const s = max === 0 ? 0 : d / max;

//   if (max == min) {
//     h = 0; // achromatic
//   } else {
//     switch (max) {
//       case red:
//         h = (green - blue) / d + (green < blue ? 6 : 0);
//         break;
//       case green:
//         h = (blue - red) / d + 2;
//         break;
//       case blue:
//         h = (red - green) / d + 4;
//         break;
//     }

//     h /= 6;
//   }

//   const output = [h, s, v];
//   if (alpha !== undefined) {
//     output.push(alpha);
//   }

//   return output;
// }
