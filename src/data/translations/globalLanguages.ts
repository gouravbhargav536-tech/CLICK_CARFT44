import { TranslationSchema } from '../../types';
import { en } from './en';

export const es: TranslationSchema = {
  ...en,
  nav: {
    ...en.nav,
    home: 'Inicio',
    about: 'Nosotros',
    services: 'Servicios',
    difference: 'Ventaja',
    reviews: 'Opiniones',
    founder: 'Fundador',
    contact: 'Contacto',
    getStarted: 'Empezar',
    callNow: 'Llamar',
  },
  hero: {
    ...en.hero,
    offerBadge: '🔥 OFERTA LIMITADA: 50% DE DESCUENTO EN PRIMERA CAMPAÑA',
    headlineStart: 'Deje de gastar en "me gusta" vacíos.',
    headlineHighlight: 'Consiga clientes reales',
    headlineEnd: 'con anuncios enfocados.',
    subheadline:
      'Creamos campañas de Meta Ads y páginas de aterrizaje de alto rendimiento para empresas en India y el extranjero. Hacemos que cada clic cuente.',
    ctaPrimary: 'Reclamar 50% de Descuento',
    ctaSecondary: 'Escribir por WhatsApp',
  },
  form: {
    ...en.form,
    title: 'Reclame su 50% de Descuento en Setup',
    nameLabel: 'Nombre Completo',
    emailLabel: 'Correo Electrónico',
    phoneLabel: 'Número de WhatsApp',
    submitBtn: 'Reclamar 50% de Descuento',
    successTitle: '¡Consulta Recibida con Éxito!',
  },
};

export const fr: TranslationSchema = {
  ...en,
  nav: {
    ...en.nav,
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    difference: 'Pourquoi Nous',
    reviews: 'Témoignages',
    founder: 'Fondateur',
    contact: 'Contact',
    getStarted: 'Commencer',
    callNow: 'Appeler',
  },
  hero: {
    ...en.hero,
    offerBadge: '🔥 OFFRE LIMITÉE: -50% SUR LE PREMIER SETUP DE CAMPAGNE',
    headlineStart: 'Arrêtez de gaspiller votre budget en faux likes.',
    headlineHighlight: 'Obtenez de vrais clients payants',
    headlineEnd: 'grâce aux publicités ciblées.',
    subheadline:
      'Nous concevons des campagnes Meta Ads et des pages de destination à haute conversion pour propulser votre entreprise en Inde et à l’international.',
    ctaPrimary: 'Réclamer l’Offre -50%',
    ctaSecondary: 'Contactez-nous sur WhatsApp',
  },
  form: {
    ...en.form,
    title: 'Profitez de -50% sur votre Campagne',
    nameLabel: 'Nom Complet',
    emailLabel: 'Adresse E-mail',
    phoneLabel: 'Numéro WhatsApp',
    submitBtn: 'Profiter de -50% & Réserver un Appel',
    successTitle: 'Demande Reçue avec Succès !',
  },
};

export const ar: TranslationSchema = {
  ...en,
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    difference: 'لماذا نحن',
    reviews: 'آراء العملاء',
    founder: 'المؤسس',
    contact: 'اتصل بنا',
    getStarted: 'ابدأ الآن',
    callNow: 'اتصل بنا',
  },
  hero: {
    ...en.hero,
    offerBadge: '🔥 عرض لفترة محدودة: خصم 50% على إعداد الحملة الأولى',
    headlineStart: 'توقف عن إهدار المال على الإعجابات الوهمية.',
    headlineHighlight: 'احصل على عملاء حقيقيين وأرباح فعلية',
    headlineEnd: 'من خلال إعلانات موجهة.',
    subheadline:
      'وكالة كليك كرافت الرقمية تقدم حملات إعلانية متقدمة على منصات ميتا وصفحات هبوط عالية التحويل في الهند وحول العالم. مهمتنا جعل كل نقرة ذات قيمة حقيقية.',
    ctaPrimary: 'احصل على خصم 50%',
    ctaSecondary: 'تواصل عبر واتساب',
  },
  form: {
    ...en.form,
    title: 'احصل على خصم 50% على إعداد حملتك',
    nameLabel: 'الاسم الكامل',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الواتساب / الهاتف',
    detailsLabel: 'تفاصيل مشروعك أو أهدافك',
    submitBtn: 'احصل على الخصم واحجز استشارة',
    successTitle: 'تم استلام طلبك بنجاح!',
  },
};
