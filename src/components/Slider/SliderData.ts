export interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

export const sliderData: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1920&q=80",
    title: "You need\na good partner",
    subtitle: "Let us help you realise your true potential"
  },
  {
    image: "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1920&q=80",
    title: "Creative\n& fresh" ,
    subtitle: "Our digital agency"
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
    title: "Hip\n& Funky",
    subtitle: "We try new things"
  }
];