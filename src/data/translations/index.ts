import { LanguageCode, TranslationSchema } from '../../types';
import { en } from './en';
import { hi } from './hi';
import { raj } from './raj';
import { es, fr, ar } from './globalLanguages';
import { gu, mr, pa, bn, ta, te, kn, ml, ur } from './indianLanguages';

export const translationsMap: Record<LanguageCode, TranslationSchema> = {
  en,
  hi,
  raj,
  gu,
  mr,
  pa,
  bn,
  ta,
  te,
  kn,
  ml,
  ur,
  es,
  ar,
  fr,
};

export const getTranslation = (lang: LanguageCode): TranslationSchema => {
  return translationsMap[lang] || translationsMap.en;
};
