export type ScoreResource = {
  farm: FarmResource;
  products: ProductsResource;
  family: FamilyResource;
  card: CardResource;
};

export type FarmResource = {
  field: number;
  pastures: number;
  emtpyFamyard: number;
  fancedStable: number;
  room: {
    type: 'wood' | 'cray' | 'stone';
    count: number;
  };
};

export type ProductsResource = {
  grain: number;
  vegetables: number;
  sheep: number;
  wildBoar: number;
  cattle: number;
};

export type FamilyResource = {
  familyMember: number;
  beggingCard: number;
};

export type CardResource = {
  basePoint: number;
  endBonus: number;
};
