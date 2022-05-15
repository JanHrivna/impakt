/* tslint:disable */
/* eslint-disable */
import { MistoUlozeni } from './misto-ulozeni';
export interface Vzorky {
  cislo_kotce: number;
  cislo_vzorku: string;
  dodani_albertov_datum: string;
  dovoz: string;
  dovoz_datum: string;
  druh: string;
  id: number;
  navazeno_kdo: string;
  navazeno_kdy: string;
  navazka_g: string;
  oznaceni_svlecky: string;
  oznaceni_vzorku_svlecky: string;
  popis: string;
  pred_posl_svlecenim_misto: string;
  priprava_vzorku_kdo: string;
  priprava_vzorku_kdy: string;
  priprava_vzorku_misto: MistoUlozeni;
  priprava_vzorku_oplach: string;
  priprava_vzorku_oplach_kdy: string;
  priprava_vzorku_suseni: string;
  priprava_vzorku_typ: string;
  puvodni_hmotnost: string;
  sber_svlecky_datum: string;
  sber_svlecky_misto: string;
  ulozeni_svlecky_misto: MistoUlozeni;
  ulozeni_vzorku_aktualni: MistoUlozeni;
  ulozeni_vzorku_do_analyzy_misto: MistoUlozeni;
  ulozeni_vzorku_do_analyzy_objekt: string;
}
