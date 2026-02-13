/**
 * Pool câu luyện nói có trường âm (長音)、âm đục (濁音)、âm ngắt (促音 っ)、âm ghép (拗音).
 * Trộn với câu từ từng bài để nâng cao phát âm.
 */
export interface SpeakingSentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

/** Câu chứa 促音 (âm ngắt っ)、長音 (trường âm)、濁音 (âm đục がざだば)、拗音 (拗音 きゃしゅちょう) */
export const SPEAKING_POOL_PRONUNCIATION: SpeakingSentence[] = [
  { japanese: 'がっこうへ行きます。', romaji: 'Gakkō e ikimasu.', vietnamese: 'Tôi đi học.' },
  { japanese: 'きってを買います。', romaji: 'Kitte o kaimasu.', vietnamese: 'Tôi mua tem.' },
  { japanese: 'ちょっと待ってください。', romaji: 'Chotto matte kudasai.', vietnamese: 'Xin chờ một chút.' },
  { japanese: 'いっしょに食べませんか。', romaji: 'Issho ni tabemasen ka.', vietnamese: 'Cùng ăn nhé?' },
  { japanese: 'コーヒーを飲みます。', romaji: 'Kōhī o nomimasu.', vietnamese: 'Tôi uống cà phê.' },
  { japanese: 'テーブルの上に本があります。', romaji: 'Tēburu no ue ni hon ga arimasu.', vietnamese: 'Trên bàn có sách.' },
  { japanese: 'じかんがあります。', romaji: 'Jikan ga arimasu.', vietnamese: 'Tôi có thời gian.' },
  { japanese: 'でんわばんごうを教えてください。', romaji: 'Denwa bangō o oshiete kudasai.', vietnamese: 'Xin cho tôi số điện thoại.' },
  { japanese: 'きょうは何曜日ですか。', romaji: 'Kyō wa nan-yōbi desu ka.', vietnamese: 'Hôm nay là thứ mấy?' },
  { japanese: 'しゅみは音楽です。', romaji: 'Shumi wa ongaku desu.', vietnamese: 'Sở thích của tôi là âm nhạc.' },
  { japanese: 'ちゅうごく語が少しわかります。', romaji: 'Chūgokugo ga sukoshi wakarimasu.', vietnamese: 'Tôi hiểu tiếng Trung một chút.' },
  { japanese: 'れいぞうこに牛乳があります。', romaji: 'Reizōko ni gyūnyū ga arimasu.', vietnamese: 'Trong tủ lạnh có sữa.' },
  { japanese: 'まっすぐ行きます。', romaji: 'Massugu ikimasu.', vietnamese: 'Đi thẳng.' },
  { japanese: 'スーパーで買い物します。', romaji: 'Sūpā de kaimono shimasu.', vietnamese: 'Tôi mua sắm ở siêu thị.' },
  { japanese: 'きれいな花ですね。', romaji: 'Kirei na hana desu ne.', vietnamese: 'Hoa đẹp nhỉ.' },
  { japanese: 'かぞくは五人です。', romaji: 'Kazoku wa gonin desu.', vietnamese: 'Gia đình tôi có năm người.' },
  { japanese: 'にほんごのべんきょうをします。', romaji: 'Nihongo no benkyō o shimasu.', vietnamese: 'Tôi học tiếng Nhật.' },
  { japanese: 'あした天気がいいです。', romaji: 'Ashita tenki ga ii desu.', vietnamese: 'Ngày mai trời đẹp.' },
];

const poolLength = SPEAKING_POOL_PRONUNCIATION.length;

/** Trộn câu bài học với pool (trường âm, âm đục, âm ngắt, âm ghép), lấy đủ count câu (mặc định 10). */
export function getSpeakingSentences<T extends { japanese: string; romaji: string; vietnamese: string }>(
  lessonSentences: T[],
  count: number = 10
): SpeakingSentence[] {
  const fromLesson = lessonSentences.slice(0, 15).map((s) => ({ japanese: s.japanese, romaji: s.romaji, vietnamese: s.vietnamese }));
  const fromPool = [...SPEAKING_POOL_PRONUNCIATION];
  const combined: SpeakingSentence[] = [];

  const takeFromLesson = Math.min(fromLesson.length, Math.ceil(count / 2));
  const takeFromPool = count - takeFromLesson;

  const shuffledLesson = fromLesson.sort(() => Math.random() - 0.5);
  const shuffledPool = fromPool.sort(() => Math.random() - 0.5);

  for (let i = 0; i < takeFromLesson && combined.length < count; i++) combined.push(shuffledLesson[i]);
  for (let i = 0; i < takeFromPool && combined.length < count; i++) combined.push(shuffledPool[i % poolLength]);

  return combined.sort(() => Math.random() - 0.5).slice(0, count);
}
