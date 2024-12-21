export interface Name {
    name: string;
    meaning: string;
  }
  
  export interface Category {
    [key: string]: Name[];
  }
  
  export interface EthnicGroup {
    title: string;
    description: string;
    categories: Category;
  }