/**
 * Bài 13: Muốn có / muốn làm & mục đích (Minna no Nihongo I – Bản dịch, tr.98–105)
 * N が 欲しいです ・ Vます たいです ・ N(place) へ Vます／N に 行きます ・ に／を 入ります／出ます ・ どこか／なにか
 */

export type Lesson13WordCategory =
  | 'verb'
  | 'adjI'
  | 'adjNa'
  | 'noun'
  | 'place'
  | 'expression'
  | 'phrase'
  | 'food';

export interface Lesson13Word {
  japanese: string;
  kana: string;
  romaji: string;
  vietnamese: string;
  category: Lesson13WordCategory;
}

export interface Lesson13Sentence {
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson13DialogueTurn {
  speaker: string;
  japanese: string;
  romaji: string;
  vietnamese: string;
}

export interface Lesson13GrammarPoint {
  title: string;
  body: string;
  examples: string[];
  note?: string;
}

export interface Lesson13Data {
  title: string;
  description: string;
  grammarSummary: string;
  words: Lesson13Word[];
  sentences: Lesson13Sentence[];
  dialogue: Lesson13DialogueTurn[];
  grammarPoints: Lesson13GrammarPoint[];
}

export const lesson13: Lesson13Data = {
  title: 'Bài 13: Muốn có / muốn làm & mục đích（欲しい・たい・に／を）',
  description:
    'N が 欲しいです (muốn có). Động từ thể ます たいです (muốn làm). N(địa điểm) へ Vます／N に 行きます・来ます・帰ります (mục đích). N に／N を với 入ります・出ます. どこか／なにか. Kính ngữ ご注文.',
  grammarSummary:
    'N が 欲しいです ・ Vます たいです（が thay を） ・ N(place) へ Vます／N に 行きます ・ N に 入ります／N を 出ます ・ どこか［へ］／なにか［を］ ・ ご～',

  words: [
    // Động từ (tr.98–99)
    { japanese: '遊びます', kana: 'あそびます', romaji: 'asobimasu', vietnamese: 'chơi', category: 'verb' },
    { japanese: '泳ぎます', kana: 'およぎます', romaji: 'oyogimasu', vietnamese: 'bơi', category: 'verb' },
    { japanese: '迎えます', kana: 'むかえます', romaji: 'mukaemasu', vietnamese: 'đón', category: 'verb' },
    { japanese: '疲れます', kana: 'つかれます', romaji: 'tsukaremasu', vietnamese: 'mệt', category: 'verb' },
    { japanese: '出します', kana: 'だします', romaji: 'dashimasu', vietnamese: 'gửi [thư]', category: 'verb' },
    { japanese: '入ります', kana: 'はいります', romaji: 'hairimasu', vietnamese: 'vào [quán giải khát]', category: 'verb' },
    { japanese: '出ます', kana: 'でます', romaji: 'demasu', vietnamese: 'ra, ra khỏi', category: 'verb' },
    { japanese: '結婚します', kana: 'けっこんします', romaji: 'kekkonshimasu', vietnamese: 'kết hôn', category: 'verb' },
    { japanese: '買い物します', kana: 'かいものします', romaji: 'kaimonoshimasu', vietnamese: 'mua hàng', category: 'verb' },
    { japanese: '食事します', kana: 'しょくじします', romaji: 'shokujishimasu', vietnamese: 'ăn cơm', category: 'verb' },
    { japanese: '散歩します', kana: 'さんぽします', romaji: 'sanposhimasu', vietnamese: 'đi dạo', category: 'verb' },

    // Tính từ (tr.99)
    { japanese: '大変［な］', kana: 'たいへん［な］', romaji: 'taihen(na)', vietnamese: 'vất vả, khó khăn', category: 'adjNa' },
    { japanese: '欲しい', kana: 'ほしい', romaji: 'hoshii', vietnamese: 'muốn có', category: 'adjI' },
    { japanese: '寂しい', kana: 'さびしい', romaji: 'sabishii', vietnamese: 'buồn, cô đơn', category: 'adjI' },
    { japanese: '広い', kana: 'ひろい', romaji: 'hiroi', vietnamese: 'rộng', category: 'adjI' },
    { japanese: '狭い', kana: 'せまい', romaji: 'semai', vietnamese: 'chật, hẹp', category: 'adjI' },

    // Danh từ – địa điểm & hoạt động (tr.99, 102–103)
    { japanese: '市役所', kana: 'しやくしょ', romaji: 'shiyakusho', vietnamese: 'văn phòng hành chính thành phố', category: 'place' },
    { japanese: 'プール', kana: 'プール', romaji: 'pūru', vietnamese: 'bể bơi', category: 'place' },
    { japanese: '川', kana: 'かわ', romaji: 'kawa', vietnamese: 'sông', category: 'noun' },
    { japanese: '経済', kana: 'けいざい', romaji: 'keizai', vietnamese: 'kinh tế', category: 'noun' },
    { japanese: '美術', kana: 'びじゅつ', romaji: 'bijutsu', vietnamese: 'mỹ thuật', category: 'noun' },
    { japanese: '釣り', kana: 'つり', romaji: 'tsuri', vietnamese: 'câu cá（～をします）', category: 'noun' },
    { japanese: 'スキー', kana: 'スキー', romaji: 'sukī', vietnamese: 'trượt tuyết（～をします）', category: 'noun' },
    { japanese: '会議', kana: 'かいぎ', romaji: 'kaigi', vietnamese: 'cuộc họp（～をします）', category: 'noun' },
    { japanese: '登録', kana: 'とうろく', romaji: 'tōroku', vietnamese: 'đăng ký（～をします）', category: 'noun' },

    // Từ & cụm hội thoại (tr.100–101)
    { japanese: '週末', kana: 'しゅうまつ', romaji: 'shūmatsu', vietnamese: 'cuối tuần', category: 'noun' },
    { japanese: '～ごろ', kana: '～ごろ', romaji: '~goro', vietnamese: 'khoảng ~ (thời gian)', category: 'expression' },
    { japanese: '何か', kana: 'なにか', romaji: 'nanika', vietnamese: 'cái gì đó', category: 'expression' },
    { japanese: 'どこか', kana: 'どこか', romaji: 'dokoka', vietnamese: 'đâu đó', category: 'expression' },
    { japanese: 'おなかがすきました', kana: 'おなかがすきました', romaji: 'onaka ga sukimashita', vietnamese: '(Tôi) đói rồi.', category: 'phrase' },
    { japanese: 'おなかがいっぱいです', kana: 'おなかがいっぱいです', romaji: 'onaka ga ippai desu', vietnamese: '(Tôi) no rồi.', category: 'phrase' },
    { japanese: 'のどがかわきました', kana: 'のどがかわきました', romaji: 'nodo ga kawakimashita', vietnamese: '(Tôi) khát.', category: 'phrase' },
    { japanese: 'そうですね', kana: 'そうですね', romaji: 'sō desu ne', vietnamese: 'Đúng thế nhỉ.', category: 'phrase' },
    { japanese: 'そうしましょう', kana: 'そうしましょう', romaji: 'sō shimashō', vietnamese: 'Nhất trí.', category: 'phrase' },
    { japanese: 'ご注文は', kana: 'ごちゅうもんは', romaji: 'go-chūmon wa', vietnamese: 'Anh/Chị dùng món gì ạ?', category: 'phrase' },
    { japanese: '定食', kana: 'ていしょく', romaji: 'teishoku', vietnamese: 'cơm suất, cơm phần', category: 'food' },
    { japanese: '牛どん', kana: 'ぎゅうどん', romaji: 'gyūdon', vietnamese: 'món cơm thịt bò', category: 'food' },
    { japanese: '別々に', kana: 'べつべつに', romaji: 'betsubetsu ni', vietnamese: 'riêng ra', category: 'expression' },
    { japanese: 'お待ちください', kana: 'おまちください', romaji: 'omachi kudasai', vietnamese: 'Xin vui lòng đợi.', category: 'phrase' },

    // Địa điểm tham khảo (tr.102–103)
    { japanese: '喫茶店', kana: 'きっさてん', romaji: 'kissaten', vietnamese: 'quán giải khát', category: 'place' },
    { japanese: 'コンビニ', kana: 'コンビニ', romaji: 'konbini', vietnamese: 'cửa hàng tiện lợi', category: 'place' },
    { japanese: 'スーパー', kana: 'スーパー', romaji: 'sūpā', vietnamese: 'siêu thị', category: 'place' },
    { japanese: 'デパート', kana: 'デパート', romaji: 'depāto', vietnamese: 'cửa hàng bách hóa', category: 'place' },
    { japanese: '大使館', kana: 'たいしかん', romaji: 'taishikan', vietnamese: 'đại sứ quán', category: 'place' },
    { japanese: '博物館', kana: 'はくぶつかん', romaji: 'hakubutsukan', vietnamese: 'bảo tàng', category: 'place' },
    { japanese: '美術館', kana: 'びじゅつかん', romaji: 'bijutsukan', vietnamese: 'bảo tàng mỹ thuật', category: 'place' },
    { japanese: '公園', kana: 'こうえん', romaji: 'kōen', vietnamese: 'công viên', category: 'place' },
    { japanese: 'つるや', kana: 'つるや', romaji: 'Tsuruya', vietnamese: 'tên nhà hàng (giả tưởng)', category: 'place' },
  ],

  sentences: [
    // Mẫu câu (tr.101)
    { japanese: 'わたしはパソコンが欲しいです。', romaji: 'Watashi wa pasokon ga hoshii desu.', vietnamese: 'Tôi muốn có một cái máy vi tính.' },
    { japanese: 'わたしはてんぷらを食べたいです。', romaji: 'Watashi wa tenpura o tabetai desu.', vietnamese: 'Tôi muốn ăn món Tempura.' },
    { japanese: 'わたしはフランスへ料理を習いに行きます。', romaji: 'Watashi wa Furansu e ryōri o narai ni ikimasu.', vietnamese: 'Tôi muốn đi Pháp để học nấu ăn.' },
    // Ví dụ (tr.101)
    { japanese: '今何がいちばん欲しいですか。…家が欲しいです。', romaji: 'Ima nani ga ichiban hoshii desu ka. …Ie ga hoshii desu.', vietnamese: 'Bây giờ anh/chị muốn cái gì nhất? …Tôi muốn một căn nhà.' },
    { japanese: '夏休みはどこへ行きたいですか。…沖縄へ行きたいです。', romaji: 'Natsuyasumi wa doko e ikitai desu ka. …Okinawa e ikitai desu.', vietnamese: 'Nghỉ hè anh/chị muốn đi đâu? …Tôi muốn đi Okinawa.' },
    { japanese: '今日は疲れましたから、何もしたくないです。', romaji: 'Kyō wa tsukaremashita kara, nani mo shitakunai desu.', vietnamese: 'Hôm nay mệt nên chẳng muốn làm gì cả.' },
    { japanese: '今週の週末は何をしますか。…神戸へ子供と船を見に行きます。', romaji: 'Konshū no shūmatsu wa nani o shimasu ka. …Kōbe e kodomo to fune o mi ni ikimasu.', vietnamese: 'Cuối tuần này anh/chị sẽ làm gì? …Tôi đi Kobe với con để xem thuyền.' },
    { japanese: '日本へ何を勉強しに来ましたか。…経済を勉強しに来ました。', romaji: 'Nihon e nani o benkyō shi ni kimashita ka. …Keizai o benkyō shi ni kimashita.', vietnamese: 'Anh/Chị đến Nhật để học gì? …Tôi đến Nhật để học kinh tế.' },
    { japanese: '冬休みはどこかへ行きましたか。…はい、行きました。…どこへ行きましたか。…北海道へスキーをしに行きました。', romaji: 'Fuyuyasumi wa dokoka e ikimashita ka. …Hai, ikimashita. …Doko e ikimashita ka. …Hokkaidō e sukī o shi ni ikimashita.', vietnamese: 'Nghỉ đông anh/chị có đi đâu không? …Có, tôi có đi. …Anh/Chị đã đi đâu? …Tôi đã đi Hokkaido để trượt tuyết.' },
    { japanese: '神戸へインド料理を食べに行きます。', romaji: 'Kōbe e Indo ryōri o tabe ni ikimasu.', vietnamese: 'Tôi đi Kobe để ăn món ăn Ấn Độ.' },
    { japanese: '神戸へ買い物に行きます。', romaji: 'Kōbe e kaimono ni ikimasu.', vietnamese: 'Tôi đi Kobe để mua hàng.' },
    { japanese: '日本へ美術の勉強に来ました。', romaji: 'Nihon e bijutsu no benkyō ni kimashita.', vietnamese: 'Tôi đến Nhật Bản để học mỹ thuật.' },
    { japanese: 'あの喫茶店に入りましょう。', romaji: 'Ano kissaten ni hairimashō.', vietnamese: 'Chúng ta vào quán giải khát kia đi.' },
    { japanese: '7時にうちを出ます。', romaji: 'Shichiji ni uchi o demasu.', vietnamese: 'Tôi ra khỏi nhà lúc 7 giờ.' },
    { japanese: 'のどがかわきましたから、何か飲みたいです。', romaji: 'Nodo ga kawakimashita kara, nanika nomitai desu.', vietnamese: 'Tôi khát nên muốn uống gì đó.' },
  ],

  dialogue: [
    // Hội thoại: Chị tính riêng ra cho ạ (tr.101) – Yamada, Miller, Nhân viên nhà hàng
    { speaker: 'Yamada', japanese: 'もう12時ですね。昼ごはんに行きませんか。', romaji: 'Mō jūniji desu ne. Hirugohan ni ikimasen ka.', vietnamese: 'Đã 12 giờ rồi đấy. Anh có đi ăn cơm trưa không?' },
    { speaker: 'Miller', japanese: 'ええ、行きましょう。', romaji: 'Ē, ikimashō.', vietnamese: 'Vâng.' },
    { speaker: 'Yamada', japanese: 'どこへ行きますか。', romaji: 'Doko e ikimasu ka.', vietnamese: 'Chúng ta đi đâu?' },
    { speaker: 'Miller', japanese: '今日は日本料理が食べたいです。', romaji: 'Kyō wa Nihon ryōri ga tabetai desu.', vietnamese: 'À, hôm nay tôi muốn ăn món ăn Nhật.' },
    { speaker: 'Yamada', japanese: 'じゃ、つるやへ行きましょう。', romaji: 'Ja, Tsuruya e ikimashō.', vietnamese: 'Thế thì chúng ta đến Nhà hàng Tsuru-ya đi.' },
    { speaker: 'Nhân viên', japanese: 'ご注文は。', romaji: 'Go-chūmon wa.', vietnamese: 'Các anh dùng gì ạ?' },
    { speaker: 'Miller', japanese: 'てんぷら定食をください。', romaji: 'Tenpura teishoku o kudasai.', vietnamese: 'Tôi ăn món cơm suất Tempura.' },
    { speaker: 'Yamada', japanese: 'わたしは牛どんをください。', romaji: 'Watashi wa gyūdon o kudasai.', vietnamese: 'Tôi ăn món cơm thịt bò.' },
    { speaker: 'Nhân viên', japanese: 'てんぷら定食と牛どんですね。少々お待ちください。', romaji: 'Tenpura teishoku to gyūdon desu ne. Shōshō omachi kudasai.', vietnamese: 'Như vậy là hai anh dùng món cơm suất Tempura và cơm thịt bò. Xin vui lòng đợi một chút ạ.' },
    { speaker: 'Nhân viên', japanese: '1,680円です。', romaji: 'Sen roppyaku hachijū-en desu.', vietnamese: 'Hết 1,680 yên ạ.' },
    { speaker: 'Miller', japanese: '別々にお願いします。', romaji: 'Betsubetsu ni onegai shimasu.', vietnamese: 'Chị tính riêng ra cho ạ.' },
    { speaker: 'Nhân viên', japanese: 'はい。てんぷら定食は980円、牛どんは700円です。', romaji: 'Hai. Tenpura teishoku wa kyūhyaku hachijū-en, gyūdon wa nanahyaku-en desu.', vietnamese: 'Vâng. Món cơm suất Tempura là 980 yên, còn món cơm thịt bò là 700 yên.' },
  ],

  grammarPoints: [
    {
      title: '1. N が 欲しいです（Muốn có）',
      body: 'Biểu thị ham muốn sở hữu một vật hoặc một người. Đối tượng ham muốn dùng trợ từ 「が」. 「ほしい」là tính từ đuôi い. Không dùng để nói ham muốn của người thứ ba.',
      examples: [
        'わたしは友達が欲しいです。→ Tôi muốn có bạn.',
        '今何がいちばん欲しいですか。…車が欲しいです。→ Bây giờ anh/chị muốn cái gì nhất? …Tôi muốn một cái ô-tô.',
      ],
      note: '「ほしいですか」「Vます たいですか」không dùng để mời (mời uống cà-phê: コーヒーはいかがですか／コーヒーを飲みませんか).',
    },
    {
      title: '2. Động từ thể ます たいです（Muốn làm）',
      body: 'Biểu thị "muốn làm" gì đó. Có thể dùng 「が」thay cho 「を」(ví dụ: てんぷらが食べたいです). 「Vます たい」chia giống tính từ い (たかったです、たくないです). Không dùng cho người thứ ba.',
      examples: [
        'わたしは沖縄へ行きたいです。→ Tôi muốn đi Okinawa.',
        'わたしはてんぷらを［が］食べたいです。→ Tôi muốn ăn Tempura.',
        'おなかが痛いですから、何も食べたくないです。→ Vì đau bụng nên tôi không muốn ăn gì.',
      ],
      note: undefined,
    },
    {
      title: '3. N(địa điểm) へ Vます／N に 行きます・来ます・帰ります（Mục đích）',
      body: 'Động từ thể ます hoặc danh từ đặt trước 「に」biểu thị mục đích của いきます、きます、かえります. Danh từ trước 「に」phải là danh từ chỉ hành động. Sự kiện (lễ hội, buổi hòa nhạc) cũng có thể đặt trước 「に」.',
      examples: [
        '神戸へインド料理を食べに行きます。→ Tôi đi Kobe để ăn món ăn Ấn Độ.',
        '神戸へ買い物に行きます。→ Tôi đi Kobe để mua hàng.',
        '日本へ美術の勉強に来ました。→ Tôi đến Nhật để học mỹ thuật.',
        'あした京都のお祭りに行きます。→ Ngày mai tôi đi Kyoto để xem lễ hội.',
      ],
      note: undefined,
    },
    {
      title: '4. N に 入ります／N を 出ます',
      body: '「に」dùng với はいります、のります (Bài 16) để chỉ điểm đến. 「を」dùng với でます、おります để chỉ điểm xuất phát.',
      examples: [
        'あの喫茶店に入りましょう。→ Chúng ta vào quán giải khát kia đi.',
        '7時にうちを出ます。→ Tôi ra khỏi nhà lúc 7 giờ.',
      ],
      note: undefined,
    },
    {
      title: '5. どこか／なにか',
      body: '「どこか」= đâu đó, chỗ nào đó. 「なにか」= cái gì đó. Trợ từ 「へ」「を」có thể lược bỏ sau どこか／なにか.',
      examples: [
        '冬休みはどこか［へ］行きましたか。…はい、行きました。→ Nghỉ đông anh/chị có đi đâu không? …Có, tôi có đi.',
        'のどがかわきましたから、何か［を］飲みたいです。→ Tôi khát nên muốn uống gì đó.',
      ],
      note: undefined,
    },
    {
      title: '6. ご注文（Kính ngữ ご）',
      body: 'Thêm 「ご」vào trước một số từ để thể hiện sự kính trọng.',
      examples: ['ご注文は。→ Anh/Chị dùng món gì ạ?'],
      note: undefined,
    },
  ],
};

// ——— Quiz items ———

export interface Lesson13VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson13GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson13VocabQuizItems: Lesson13VocabQuizItem[] = [
  { id: 1, vi: 'muốn có', options: ['ほしい', 'たいへん', 'さびしい'], correctIndex: 0, explanationVi: '欲しい(hoshii) = muốn có (tính từ い).' },
  { id: 2, vi: 'bơi', options: ['およぎます', 'あそびます', 'つかれます'], correctIndex: 0, explanationVi: '泳ぎます(oyogimasu) = bơi.' },
  { id: 3, vi: 'vào [quán]', options: ['はいります', 'でます', 'だします'], correctIndex: 0, explanationVi: '入ります(hairimasu) = vào. 出ます(demasu) = ra.' },
  { id: 4, vi: 'rộng', options: ['ひろい', 'せまい', 'さびしい'], correctIndex: 0, explanationVi: '広い(hiroi) = rộng. 狭い(semai) = hẹp.' },
  { id: 5, vi: 'cuối tuần', options: ['しゅうまつ', 'なにか', 'どこか'], correctIndex: 0, explanationVi: '週末(shūmatsu) = cuối tuần.' },
  { id: 6, vi: 'cơm suất', options: ['ていしょく', 'ぎゅうどん', 'べつべつに'], correctIndex: 0, explanationVi: '定食(teishoku) = cơm suất, cơm phần.' },
  { id: 7, vi: 'Đúng thế nhỉ.', options: ['そうですね', 'そうしましょう', 'おまちください'], correctIndex: 0, explanationVi: 'そうですね = tán thành với người nói.' },
  { id: 8, vi: 'riêng ra', options: ['べつべつに', 'ごちゅうもんは', 'しゅうまつ'], correctIndex: 0, explanationVi: '別々に = tính tiền riêng từng người.' },
  { id: 9, vi: 'đi dạo', options: ['さんぽします', 'かいものします', 'しょくじします'], correctIndex: 0, explanationVi: '散歩します = đi dạo.' },
  { id: 10, vi: 'quán giải khát', options: ['きっさてん', 'コンビニ', 'スーパー'], correctIndex: 0, explanationVi: '喫茶店(kissaten) = quán cà-phê, quán giải khát.' },
];

export const lesson13GrammarQuizItems: Lesson13GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Tôi muốn có máy vi tính.',
    options: ['わたしはパソコンが欲しいです。', 'わたしはパソコンを欲しいです。', 'わたしはパソコンが欲しいます。'],
    correctIndex: 0,
    explanationVi: 'Muốn có: N が 欲しいです. Đối tượng ham muốn dùng が.',
  },
  {
    id: 2,
    vi: 'Tôi muốn ăn Tempura.',
    options: ['わたしはてんぷらを食べたいです。', 'わたしはてんぷらを食べます。', 'わたしはてんぷらが食べます。'],
    correctIndex: 0,
    explanationVi: 'Muốn làm: Vます（bỏ ます）+ たいです. 食べます → 食べたいです.',
  },
  {
    id: 3,
    vi: 'Tôi đi Kobe để ăn món Ấn Độ.',
    options: ['神戸へインド料理を食べに行きます。', '神戸へインド料理に食べに行きます。', '神戸にインド料理を食べに行きます。'],
    correctIndex: 0,
    explanationVi: 'Mục đích: N(place) へ Vます（stem）に 行きます. 食べます → 食べに.',
  },
  {
    id: 4,
    vi: 'Chúng ta vào quán giải khát kia đi.',
    options: ['あの喫茶店に入りましょう。', 'あの喫茶店を入りましょう。', 'あの喫茶店へ入りましょう。'],
    correctIndex: 0,
    explanationVi: 'Điểm đến của 入ります dùng に.',
  },
  {
    id: 5,
    vi: 'Tôi ra khỏi nhà lúc 7 giờ.',
    options: ['7時にうちを出ます。', '7時にうちに出ます。', '7時でうちを出ます。'],
    correctIndex: 0,
    explanationVi: 'Điểm xuất phát của 出ます dùng を.',
  },
  {
    id: 6,
    vi: 'Tôi khát nên muốn uống gì đó.',
    options: ['のどがかわきましたから、何か飲みたいです。', 'のどがかわきましたから、何を飲みたいです。', 'のどがかわきましたから、何か飲みます。'],
    correctIndex: 0,
    explanationVi: 'なにか = cái gì đó. 飲みたいです = muốn uống.',
  },
  {
    id: 7,
    vi: 'Nghỉ đông anh/chị có đi đâu không?',
    options: ['冬休みはどこかへ行きましたか。', '冬休みはどこへ行きましたか。', '冬休みはどこか行きましたか。'],
    correctIndex: 0,
    explanationVi: 'どこか = đâu đó. どこかへ hoặc どこか (bỏ へ) đều được.',
  },
  {
    id: 8,
    vi: 'Hôm nay mệt nên tôi không muốn làm gì.',
    options: ['今日は疲れましたから、何もしたくないです。', '今日は疲れましたから、何かしたくないです。', '今日は疲れましたから、何もしません。'],
    correctIndex: 0,
    explanationVi: 'したくないです = không muốn làm (する → したい → したくない). 何も = không … gì.',
  },
  {
    id: 9,
    vi: 'Tôi đến Nhật để học mỹ thuật.',
    options: ['日本へ美術の勉強に来ました。', '日本へ美術を勉強に来ました。', '日本に美術の勉強に来ました。'],
    correctIndex: 0,
    explanationVi: 'Mục đích: N の 勉強 に 来ます. Danh từ chỉ hành động đứng trước に.',
  },
  {
    id: 10,
    vi: 'Bây giờ anh/chị muốn cái gì nhất?',
    options: ['今何がいちばん欲しいですか。', '今何をいちばん欲しいですか。', '今何がいちばん欲しいますか。'],
    correctIndex: 0,
    explanationVi: 'Chủ ngữ nghi vấn 何 đi với が. 欲しいです (tính từ い).',
  },
];

export const lesson13BuilderItems = [
  { id: 1, vi: 'Tôi muốn có máy vi tính.', hint: 'N が 欲しいです。', tokens: ['わたしは', 'パソコン', 'が', '欲しいです。'] },
  { id: 2, vi: 'Tôi muốn ăn Tempura.', hint: 'N を Vます たいです。', tokens: ['わたしは', 'てんぷらを', '食べたい', 'です。'] },
  { id: 3, vi: 'Tôi đi Kobe để mua hàng.', hint: 'N(place) へ Vます（stem）に 行きます。', tokens: ['神戸へ', '買い物に', '行きます。'] },
  { id: 4, vi: 'Chúng ta vào quán giải khát kia đi.', hint: 'N に 入ります。', tokens: ['あの', '喫茶店に', '入りましょう。'] },
  { id: 5, vi: 'Tôi khát nên muốn uống gì đó.', hint: 'から、なにか Vたいです。', tokens: ['のどがかわきました', 'から、', '何か', '飲みたいです。'] },
] as const;

export const lesson13DialogueQuizItems = [
  { questionVi: 'Miller muốn ăn gì hôm nay?', options: ['Món ăn Nhật.', 'Món ăn Ấn Độ.', 'Món Tempura.'], correctIndex: 0, explanationVi: 'Miller nói: 今日は日本料理が食べたいです。' },
  { questionVi: 'Hai người đi nhà hàng nào?', options: ['Tsuru-ya.', 'Một quán cà-phê.', 'Siêu thị.'], correctIndex: 0, explanationVi: 'Yamada: つるやへ行きましょう。' },
  { questionVi: 'Miller gọi món gì?', options: ['Cơm suất Tempura.', 'Cơm thịt bò.', 'Hai món.'], correctIndex: 0, explanationVi: 'Miller: てんぷら定食をください。' },
  { questionVi: 'Miller nhờ nhân viên làm gì khi thanh toán?', options: ['Tính riêng từng người.', 'Tính gộp.', 'Tính tiền Tempura trước.'], correctIndex: 0, explanationVi: 'Miller: 別々にお願いします。' },
  { questionVi: 'Cơm suất Tempura bao nhiêu yên?', options: ['980 yên.', '700 yên.', '1,680 yên.'], correctIndex: 0, explanationVi: 'Nhân viên: てんぷら定食は980円。' },
  { questionVi: 'Câu nhân viên dùng để hỏi khách gọi món?', options: ['ご注文は。', '別々に。', 'お待ちください。'], correctIndex: 0, explanationVi: 'ご注文は。= Anh/Chị dùng món gì ạ?' },
] as const;
