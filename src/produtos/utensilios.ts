import bonecos from "../../public/Imagens/Bonecos.png";
import dragonBall from "../../public/Imagens/dragonBallZ.png";
import decoracao from '../../public/Imagens/decoracao.png';
import chaveiro from '../../public/Imagens/chaveiro.png';
import marcaPagina from '../../public/Imagens/marcaPagina.png';
import dedoche from '../../public/Imagens/dedoche.png';
import guirlanda from '../../public/Imagens/guirlanda.png';
import enfeitePorta from '../../public/Imagens/enfeitePorta.png';
import natal from '../../public/Imagens/enfeiteNatal.png';
import personagens from '../../public/Imagens/personagens.png';
import portaRetrato from '../../public/Imagens/PortaRetrato.png';
import portaLapis from '../../public/Imagens/portaLapis.png';
import portaTesoura from '../../public/Imagens/portaTesoura.png';
import portaBombons from '../../public/Imagens/portaBombom.png';
import portaChave from '../../public/Imagens/PortaChave.png';
import decoracaoNatal from '../../public/Imagens/decoracaoNatal.png';
import decoracaoPascoa from '../../public/Imagens/decoracaoPascoa.png';
import decoracaoSaoJoao from '../../public/Imagens/PersonagemSaoJoao.png';
import halloween from '../../public/Imagens/personagemHalloween.png';
import filmes from '../../public/Imagens/personagemFilme.png';
import quadrinhos from '../../public/Imagens/PersonagemQuadrinhos.png';
import animes from '../../public/Imagens/PersonagemAnime.png';
import halloween2 from '../../public/Imagens/halloween2.png';
import religioso from '../../public/Imagens/personagemReligioso.png';
import natal2 from '../../public/Imagens/natal3.png';
import foneOuvido from '../../public/Imagens/portaFoneOuvido.png';
import religioso2 from '../../public/Imagens/PersonagemReligioso1.png';
import infantil from '../../public/Imagens/PersonagemInfantil.png';
import celular from '../../public/Imagens/PortaCelular.png'; 
import ima from '../../public/Imagens/ImasGeladeira.png';
import almofadinha from '../../public/Imagens/AlmofadinhaAlfinete.png';
import mascara from '../../public/Imagens/MascaraDormir.png';
import memes from '../../public/Imagens/memes.png';
import naruto from '../../public/Imagens/naruto.png';
import oxossi from '../../public/Imagens/oxossi.png';
import jesus from '../../public/Imagens/jesus.png';
import anne from '../../public/Imagens/boneco.png';
import up from '../../public/Imagens/up.png' 

export const utensilios = [
  { id: "1", nome: "Decoracao", descricao: 'Decoração', imagem: decoracao, tipo: 'decoracao' },
  { id: "2", nome: "Chaveiro", descricao: 'Chaveiro', imagem: chaveiro, tipo: 'utilidade' },
  { id: "3", nome: "Marcador", descricao: 'Marcador de Livro (Harry Potter)', imagem: marcaPagina, tipo: 'utilidade' },
  { id: "4", nome: "Dedoche", descricao: 'Dedoche', imagem: dedoche, tipo: 'utilidade' },
  { id: "5", nome: "Guirlanda", descricao: 'Guirlanda', imagem: guirlanda, tipo: 'decoracao' },
  { id: "6", nome: "Enfeite", descricao: 'Enfeite de Porta', imagem: enfeitePorta, tipo: 'decoracao' },
  { id: "7", nome: "personagem", descricao: 'Personagens da Turma da Mônica', imagem: personagens, tipo: 'personagem' },
  { id: "8", nome: "prendedor", descricao: 'Prendedor de Cortina', imagem: bonecos, tipo: 'utilidade' },
  { id: "9", nome: "Retrato", descricao: 'Porta Retrato', imagem: portaRetrato, tipo: 'utilidade' },
  { id: "10", nome: "Lapis", descricao: 'Porta Lápis', imagem: portaLapis, tipo: 'utilidade' },
  { id: "11", nome: "Tesoura", descricao: 'Porta Tesoura', imagem: portaTesoura, tipo: 'utilidade' },
  { id: "12", nome: "Bombons", descricao: 'Porta Bombons', imagem: portaBombons, tipo: 'utilidade' },
  { id: "13", nome: "Chave", descricao: 'Porta Chave', imagem: portaChave, tipo: 'utilidade' },
  { id: "14", nome: "Natal", descricao: 'Decoração de Natal', imagem: decoracaoNatal, tipo: 'decoracao' },
  { id: "15", nome: "Pascoa", descricao: 'Decoração de Páscoa', imagem: decoracaoPascoa, tipo: 'decoracao' },
  { id: "16", nome: "Sao joao", descricao: 'Decoração de São João', imagem: decoracaoSaoJoao, tipo: 'decoracao' },
  { id: "17", nome: "Halloween", descricao: 'Decoração de Halloween', imagem: halloween, tipo: 'decoracao' },
  { id: "18", nome: "Filme", descricao: 'Personagem de UP (Russel)', imagem: filmes, tipo: 'personagem' },
  { id: "19", nome: "Quadrinhos", descricao: 'Personagem de Quadrinhos (Emília)', imagem: quadrinhos, tipo: 'personagem' },
  { id: "20", nome: "Anime", descricao: 'Personagem de Anime (Sakura)', imagem: animes, tipo: 'personagem' },
  { id: "21", nome: "Halloween", descricao: 'Personagem de Halloween', imagem: halloween2, tipo: 'decoracao' },
  { id: "22", nome: "Religioso", descricao: 'Personagem Religioso (São Pedro)', imagem: religioso, tipo: 'decoracao' },
  { id: "23", nome: "Natal", descricao: 'Decoração de Natal', imagem: natal2, tipo: 'decoracao' },
  { id: "24", nome: "Fone", descricao: 'Porta Fone de Ouvido', imagem: foneOuvido, tipo: 'utilidade' },
  { id: "25", nome: "Religioso", descricao: 'Personagem Religioso (Iemanjá)', imagem: religioso2, tipo: 'personagem' },
  { id: "26", nome: "Infantil", descricao: 'Personagem Infantil (Chip e Potato)', imagem: infantil, tipo: 'personagem' },
  { id: "27", nome: "Celular", descricao: 'Porta Celular (rato do castelo Ra-Tim-Bum)', imagem: celular, tipo: 'utilidade' },
  { id: "28", nome: "Ima", descricao: 'Imã de Geladeira', imagem: ima, tipo: 'utilidade' },
  { id: "29", nome: "Almofada", descricao: 'Almofadinha para alfinetes', imagem: almofadinha, tipo: 'utilidade' },
  { id: "30", nome: "Mascara", descricao: 'Máscara para Dormir', imagem: mascara, tipo: 'utilidade' },
  { id: "31", nome: "Natal", descricao: 'Decoração de Natal', imagem: natal, tipo: 'decoracao' },
  { id: "32", nome: "Meme", descricao: 'Memes', imagem: memes, tipo: 'utilidade'  },
  { id: "33", nome: "Dragon Ball", descricao: 'Dragon Ball Z', imagem: dragonBall, tipo: 'personagem' },
  { id: "34", nome: "Naruto", descricao: 'Naruto', imagem: naruto, tipo: 'personagem' },
  { id: "35", nome: "Religioso", descricao: 'Personagem Religioso (Oxóssi)', imagem: oxossi, tipo: 'personagem' },
  { id: "36", nome: "Religioso", descricao: 'Personagem Religioso (Jesus)', imagem: jesus, tipo: 'personagem' },
  { id: "37", nome: "Filme", descricao: 'Personagem de cinema (Anne com "E")', imagem: anne, tipo: 'personagem' },
  { id: "38", nome: "Filme", descricao: 'Personagem de UP (Carl)', imagem: up, tipo: 'personagem' }
]
