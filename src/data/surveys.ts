export interface Survey {
  id: number;
  artist: string;
  image: string;
  reward: number;
  premium?: boolean; // Novo campo para indicar artistas premium
  questions: {
    rating: string;
    recommendation: string;
    ageGroup: string;
  };
}

// Artistas normais (desbloqueados)
export const surveys: Survey[] = [
  {
    id: 1,
    artist: "Matuê",
    image: "./images/matue.webp",
    reward: 33.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas de Matuê?",
      recommendation: "Recomendaria o cantor Matuê para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor Matuê?"
    }
  },
  {
    id: 2,
    artist: "Luan Santana",
    image: "./images/LuanSantana.JPG",
    reward: 34.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do Luan Santana?",
      recommendation: "Recomendaria o cantor Luan Santana para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor Luan Santana?"
    }
  },
  {
    id: 3,
    artist: "Anitta",
    image: "./images/annita.webp",
    reward: 47.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas da Anitta?",
      recommendation: "Recomendaria a cantora Anitta para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta a cantora Anitta?"
    }
  },
  {
    id: 4,
    artist: "Wesley Safadão",
    image: "./images/ws.webp",
    reward: 43.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do Wesley Safadão?",
      recommendation: "Recomendaria o cantor Wesley Safadão para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor Wesley Safadão?"
    }
  },
  {
    id: 5,
    artist: "Ludmilla",
    image: "./images/ludmillaa.JPG",
    reward: 52.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas da Ludmilla?",
      recommendation: "Recomendaria a cantora Ludmilla para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta a cantora Ludmilla?"
    }
  },
  {
    id: 6,
    artist: "MC Daniel",
    image: "./images/mcdaniel.JPG",
    reward: 32.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do MC Daniel?",
      recommendation: "Recomendaria o cantor MC Daniel para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor MC Daniel?"
    }
  },
  {
    id: 7,
    artist: "MC Cabelinho",
    image: "./images/mcabelin.JPG",
    reward: 32.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do MC Cabelinho?",
      recommendation: "Recomendaria o cantor MC Cabelinho para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor MC Cabelinho?"
    }
  },
  {
    id: 8,
    artist: "Poze do Rodo",
    image: "./images/poze.webp",
    reward: 27.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do Poze do Rodo?",
      recommendation: "Recomendaria o cantor Poze do Rodo para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor Poze do Rodo?"
    }
  },
  {
    id: 9,
    artist: "Ivete Sangalo",
    image: "./images/ivete.webp",
    reward: 30.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas da Ivete Sangalo?",
      recommendation: "Recomendaria a cantora Ivete Sangalo para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta a cantora Ivete Sangalo?"
    }
  },
  {
    id: 10,
    artist: "Alok",
    image: "./images/alok.webp",
    reward: 43.00,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do Alok?",
      recommendation: "Recomendaria o DJ Alok para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o DJ Alok?"
    }
  }
];

// Artistas premium (bloqueados até validação)
export const premiumSurveys: Survey[] = [
  {
    id: 101,
    artist: "Billie Eilish",
    image: "https://images.unsplash.com/photo-1651174978308-b7bd7fc8351b?q=80&w=1170&auto=format&fit=crop",
    reward: 120.00,
    premium: true,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas da Billie Eilish?",
      recommendation: "Recomendaria a cantora Billie Eilish para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta a cantora Billie Eilish?"
    }
  },
  {
    id: 102,
    artist: "The Weeknd",
    image: "https://images.unsplash.com/photo-1634091810090-39e8b30cac20?q=80&w=1209&auto=format&fit=crop",
    reward: 135.00,
    premium: true,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do The Weeknd?",
      recommendation: "Recomendaria o cantor The Weeknd para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor The Weeknd?"
    }
  },
  {
    id: 103,
    artist: "Taylor Swift",
    image: "https://images.unsplash.com/photo-1612440540747-929f8ebf6e78?q=80&w=1170&auto=format&fit=crop",
    reward: 145.00,
    premium: true,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas da Taylor Swift?",
      recommendation: "Recomendaria a cantora Taylor Swift para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta a cantora Taylor Swift?"
    }
  },
  {
    id: 104,
    artist: "Drake",
    image: "https://images.unsplash.com/photo-1523554888454-84137e72c3ce?q=80&w=1170&auto=format&fit=crop",
    reward: 130.00,
    premium: true,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do Drake?",
      recommendation: "Recomendaria o cantor Drake para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor Drake?"
    }
  },
  {
    id: 105,
    artist: "Zé Vaqueiro",
    image: "https://images.unsplash.com/photo-1499233983070-99a5f004e720?q=80&w=1170&auto=format&fit=crop",
    reward: 125.00,
    premium: true,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas do Zé Vaqueiro?",
      recommendation: "Recomendaria o cantor Zé Vaqueiro para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta o cantor Zé Vaqueiro?"
    }
  },
  {
    id: 106,
    artist: "Ariana Grande",
    image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1170&auto=format&fit=crop",
    reward: 150.00,
    premium: true,
    questions: {
      rating: "De 1 a 5, qual nota você daria para as músicas da Ariana Grande?",
      recommendation: "Recomendaria a cantora Ariana Grande para seus amigos e familiares?",
      ageGroup: "Qual faixa etária você acha que mais escuta a cantora Ariana Grande?"
    }
  }
]