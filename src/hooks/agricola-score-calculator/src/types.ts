export type ScoreResource = {
  farm: FarmResource;
  products: ProductResource;
  family: FamilyResource;
  card: CardResource;
};

export type FarmResource = {
  field: number;
  pastures: number;
  emtpyFamyard: number;
  fancedStable: number;
};

export type ProductResource = {
  grain: number;
  vegetables: number;
  sheep: number;
  wildBoar: number;
  cattle: number;
};

export type FamilyResource = {
  room: {
    type: 'wood' | 'cray' | 'stone';
    count: number;
  };
  familyMember: number;
  beggingCard: number;
};

export type CardResource = {
  basePoint: number;
  endBonus: number;
};
