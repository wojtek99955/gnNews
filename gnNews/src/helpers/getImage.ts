import noImageIcon from "../assets/images/no-image-icon.jpg";

export const getImage = (url: any) => {
  if (url !== null) {
    return url;
  } else {
    return noImageIcon;
  }
};
