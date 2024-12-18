function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const calculateWidth = (rating: number): string => `${rating * 20}%`;

export {capitalizeFirstLetter, calculateWidth};
