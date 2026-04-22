export type NavigationLink = "Missão" | "Apostolado" | "Visão" | "Membro";

export type Pillar = {
  title: string;
  latin: string;
  desc: string;
};

export type VisionItem = {
  num: string;
  text: string;
};

export type FooterColumn = {
  heading: string;
  links: string[];
};

export type MembershipBenefit = {
  title: string;
  desc: string;
};

export const navigationLinks: NavigationLink[] = [
  "Missão",
  "Apostolado",
  "Visão",
  "Membro",
];

export const pillars: Pillar[] = [
  {
    title: "Edição e Publicação",
    latin: "Verba manent",
    desc: "Publicamos e distribuímos missais, catecismos e obras devocionais forjados para durar — não para agradar.",
  },
  {
    title: "Apoio ao Clero",
    latin: "Servi inutiles sumus",
    desc: "Fornecemos paramentos, objectos litúrgicos e recursos materiais a sacerdotes que celebram o rito imemorial.",
  },
  {
    title: "Formação dos Fiéis",
    latin: "Fide et studio",
    desc: "Doutrina, liturgia e espiritualidade clássica para jovens que recusam crescer sem raízes.",
  },
  {
    title: "Apostolado Digital",
    latin: "In novis mediis, vetus fides",
    desc: "Plataformas e conteúdo que levam a Tradição ao mundo moderno, sem ceder ao seu espírito.",
  },
  {
    title: "Restauração Cultural",
    latin: "Redde quod debes",
    desc: "Arte, arquitectura, música sacra e ordem política conforme a lei natural e a doutrina perene.",
  },
  {
    title: "Missa Tradicional",
    latin: "Lex orandi, lex credendi",
    desc: "Defesa da Missa em Rito Romano tradicional como coração do apostolado — porque tudo começa no altar e ao altar regressa.",
  },
];

export const visionItems: VisionItem[] = [
  {
    num: "I",
    text: "Católicos que tenham a vida de oração como algo prioritário na sua vida.",
  },
  {
    num: "II",
    text: "Católicos bem formados para que possam conhecer e defender a sua fé.",
  },
  {
    num: "III",
    text: "Católicos que se esforcem diariamente para serem melhores, crescendo na vida das virtudes.",
  },
  {
    num: "IV",
    text: "Sacerdotes bem formados e devidamente providos para servir as suas comunidades.",
  },
  {
    num: "V",
    text: "Uma rede de comunidades católicas tradicionais em Portugal e na Europa.",
  },
  { num: "VI", text: "Uma Igreja que não tem medo de ser católica." },
];

export const footerColumns: FooterColumn[] = [
  {
    heading: "Instituto",
    links: ["Missão", "História", "Espiritualidade"],
  },
  {
    heading: "Apostolado",
    links: ["Publicações", "Formação", "Apoio ao Clero"],
  },
  {
    heading: "Comunidade",
    links: ["Eventos", "Newsletter", "Contacto"],
  },
];

export const membershipBenefits: MembershipBenefit[] = [
  {
    title: "Formação sólida",
    desc: "Acesso prioritário a iniciativas de doutrina, liturgia e vida espiritual orientadas pelo apostolado.",
  },
  {
    title: "Vida comum",
    desc: "Participação mais próxima numa rede de fiéis comprometidos com a restauração católica em Portugal e na Europa.",
  },
  {
    title: "Missão concreta",
    desc: "Possibilidade de apoiar projectos editoriais, eventos, assistência ao clero e iniciativas culturais com continuidade.",
  },
];
