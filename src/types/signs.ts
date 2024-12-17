export interface Sign {
  name: string;
  sexe: string;
  nature: string;
  days: string;
  astrologiqueMatching:{ zodiaqueSign:string, planet:string};
  portrait: string;
  character: {moral:string, intellectual:string};
  profession: [string, string,string, string, string];
  physicalRapport:string;
  deseases:[string,string,string];
  comment:string;
  interdictions:[string,string,string ,string]
 
}