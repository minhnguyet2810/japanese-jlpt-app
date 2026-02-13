/**
 * Bài 15: Nghề nghiệp & gia đình – Minna no Nihongo I
 *
 * Chủ đề chính theo sách:
 * - Từ vựng nghề nghiệp, gia đình.
 * - Ngữ pháp: Vて も いいです／Vて は いけません（được/không được làm ~）・Vて います（trạng thái, nghề nghiệp, nơi ở).
 * - Hội thoại: “Gia đình anh thế nào?” – hỏi và giới thiệu về gia đình.
 */
import type { StaticLessonData } from './lessonTypes';

export const lesson15: StaticLessonData = {
  title: 'Bài 15: Nghề nghiệp & gia đình（Vてもいいです／Vてはいけません／Vています）',
  description:
    'Hỏi và giới thiệu về gia đình, nghề nghiệp. Mẫu câu Vてもいいです (làm ~ cũng được), Vてはいけません (không được làm ~) và Vています diễn tả nghề nghiệp, trạng thái đang tiếp diễn.',
  grammarSummary:
    'Vてもいいです（được phép）・Vてはいけません（cấm, không được）・Vています（nghề nghiệp／trạng thái）',
  words: [
    // Nghề nghiệp (full theo trang minh họa “Nghề nghiệp” trong sách)
    { japanese: '会社員', kana: 'かいしゃいん', romaji: 'kaishain', vietnamese: 'nhân viên công ty', category: 'job' },
    { japanese: '公務員', kana: 'こうむいん', romaji: 'kōmuin', vietnamese: 'công chức', category: 'job' },
    { japanese: '駅員', kana: 'えきいん', romaji: 'ekiin', vietnamese: 'nhân viên nhà ga', category: 'job' },
    { japanese: '銀行員', kana: 'ぎんこういん', romaji: 'ginkōin', vietnamese: 'nhân viên ngân hàng', category: 'job' },
    { japanese: '郵便局員', kana: 'ゆうびんきょくいん', romaji: 'yūbinkyokuin', vietnamese: 'nhân viên bưu điện', category: 'job' },
    { japanese: '店員', kana: 'てんいん', romaji: 'tenin', vietnamese: 'nhân viên cửa hàng／nhà hàng', category: 'job' },
    { japanese: 'コック', kana: 'コック', romaji: 'kokku', vietnamese: 'đầu bếp', category: 'job' },
    { japanese: '美容師', kana: 'びようし', romaji: 'biyōshi', vietnamese: 'thợ cắt tóc, thợ làm tóc', category: 'job' },
    { japanese: '研究者', kana: 'けんきゅうしゃ', romaji: 'kenkyūsha', vietnamese: 'nhà nghiên cứu', category: 'job' },
    { japanese: '医者', kana: 'いしゃ', romaji: 'isha', vietnamese: 'bác sĩ', category: 'job' },
    { japanese: '看護師', kana: 'かんごし', romaji: 'kangoshi', vietnamese: 'y tá', category: 'job' },
    { japanese: '教師', kana: 'きょうし', romaji: 'kyōshi', vietnamese: 'giáo viên', category: 'job' },
    { japanese: '弁護士', kana: 'べんごし', romaji: 'bengoshi', vietnamese: 'luật sư', category: 'job' },
    { japanese: '警察官', kana: 'けいさつかん', romaji: 'keisatsukan', vietnamese: 'cảnh sát', category: 'job' },
    { japanese: '外交官', kana: 'がいこうかん', romaji: 'gaikōkan', vietnamese: 'nhà ngoại giao', category: 'job' },
    { japanese: '歌手', kana: 'かしゅ', romaji: 'kashu', vietnamese: 'ca sĩ', category: 'job' },
    { japanese: '俳優', kana: 'はいゆう', romaji: 'haiyū', vietnamese: 'diễn viên', category: 'job' },
    { japanese: 'スポーツ選手', kana: 'スポーツせんしゅ', romaji: 'supōtsu senshu', vietnamese: 'vận động viên', category: 'job' },
    { japanese: 'エンジニア', kana: 'エンジニア', romaji: 'enjiniya', vietnamese: 'kỹ sư', category: 'job' },
    { japanese: 'デザイナー', kana: 'デザイナー', romaji: 'dezainā', vietnamese: 'nhà thiết kế', category: 'job' },
    { japanese: 'ジャーナリスト', kana: 'ジャーナリスト', romaji: 'jānarisuto', vietnamese: 'nhà báo', category: 'job' },
    { japanese: '学生', kana: 'がくせい', romaji: 'gakusei', vietnamese: 'học sinh, sinh viên', category: 'job' },

    // Gia đình cơ bản
    { japanese: '家族', kana: 'かぞく', romaji: 'kazoku', vietnamese: 'gia đình (mình)', category: 'family' },
    { japanese: '両親', kana: 'りょうしん', romaji: 'ryōshin', vietnamese: 'bố mẹ (mình)', category: 'family' },
    { japanese: 'お父さん', kana: 'おとうさん', romaji: 'otōsan', vietnamese: 'bố (người khác)', category: 'family' },
    { japanese: 'お母さん', kana: 'おかあさん', romaji: 'okāsan', vietnamese: 'mẹ (người khác)', category: 'family' },
    { japanese: '兄弟', kana: 'きょうだい', romaji: 'kyōdai', vietnamese: 'anh em, chị em (mình)', category: 'family' },
    { japanese: '兄', kana: 'あに', romaji: 'ani', vietnamese: 'anh trai (mình)', category: 'family' },
    { japanese: 'お兄さん', kana: 'おにいさん', romaji: 'onīsan', vietnamese: 'anh trai (người khác)', category: 'family' },
    { japanese: '姉', kana: 'あね', romaji: 'ane', vietnamese: 'chị gái (mình)', category: 'family' },
    { japanese: 'お姉さん', kana: 'おねえさん', romaji: 'onēsan', vietnamese: 'chị gái (người khác)', category: 'family' },
    { japanese: '弟', kana: 'おとうと', romaji: 'otōto', vietnamese: 'em trai (mình)', category: 'family' },
    { japanese: '妹', kana: 'いもうと', romaji: 'imōto', vietnamese: 'em gái (mình)', category: 'family' },

    // Một số động từ & biểu hiện hay dùng với Vて
    { japanese: '吸います［たばこを～］', kana: 'すいます［たばこを～］', romaji: 'suimasu [tabako o ~]', vietnamese: 'hút (thuốc lá)', category: 'verb' },
    { japanese: '入ります', kana: 'はいります', romaji: 'hairimasu', vietnamese: 'vào', category: 'verb' },
    { japanese: '座ります', kana: 'すわります', romaji: 'suwarimasu', vietnamese: 'ngồi', category: 'verb' },
    { japanese: '立ちます', kana: 'たちます', romaji: 'tachimasu', vietnamese: 'đứng', category: 'verb' },
    { japanese: '使います', kana: 'つかいます', romaji: 'tsukaimasu', vietnamese: 'dùng, sử dụng', category: 'verb' },
    { japanese: '持っています', kana: 'もっています', romaji: 'motte imasu', vietnamese: 'đang có, đang cầm', category: 'verb' },
    { japanese: '住んでいます', kana: 'すんでいます', romaji: 'sunde imasu', vietnamese: 'đang sống (ở ~)', category: 'verb' },

    // Biểu hiện cho phép / cấm đoán
    { japanese: 'ここでたばこを吸ってもいいですか。', kana: 'ここで たばこを すっても いいですか。', romaji: 'Koko de tabako o sutte mo ii desu ka.', vietnamese: 'Tôi hút thuốc ở đây được không?', category: 'expression' },
    { japanese: 'いいですよ。', kana: 'いいですよ。', romaji: 'Ii desu yo.', vietnamese: 'Được chứ.', category: 'expression' },
    { japanese: 'いけません。', kana: 'いけません。', romaji: 'Ikemasen.', vietnamese: 'Không được.', category: 'expression' },
  ],
  sentences: [
    // Vてもいいです – được phép
    {
      japanese: 'ここで写真を撮ってもいいですか。',
      romaji: 'Koko de shashin o totte mo ii desu ka.',
      vietnamese: 'Tôi chụp ảnh ở đây được không?',
    },
    {
      japanese: 'はい、撮ってもいいです。',
      romaji: 'Hai, totte mo ii desu.',
      vietnamese: 'Vâng, được chụp.',
    },
    {
      japanese: 'ここでたばこを吸ってもいいですか。',
      romaji: 'Koko de tabako o sutte mo ii desu ka.',
      vietnamese: 'Tôi hút thuốc ở đây được không?',
    },
    {
      japanese: 'いいえ、ここでたばこを吸ってはいけません。',
      romaji: 'Iie, koko de tabako o sutte wa ikemasen.',
      vietnamese: 'Không, không được hút thuốc ở đây.',
    },

    // Vています – nghề nghiệp, trạng thái
    {
      japanese: 'ミラーさんは銀行で働いています。',
      romaji: 'Mirā-san wa ginkō de hataraite imasu.',
      vietnamese: 'Anh Miller đang làm việc ở ngân hàng.',
    },
    {
      japanese: '父は会社員です。大阪で働いています。',
      romaji: 'Chichi wa kaishain desu. Ōsaka de hataraite imasu.',
      vietnamese: 'Bố tôi là nhân viên công ty. Ông ấy làm việc ở Osaka.',
    },
    {
      japanese: '弟は大学で勉強しています。',
      romaji: 'Otōto wa daigaku de benkyō shite imasu.',
      vietnamese: 'Em trai tôi đang học đại học.',
    },
  ],
  dialogue: [
    // Hội thoại “Gia đình anh thế nào?” (dựa theo Minna, bản dịch Việt)
    {
      speaker: 'A',
      japanese: 'ミラーさんのご家族は？',
      romaji: 'Mirā-san no go-kazoku wa?',
      vietnamese: 'Gia đình anh Miller thế nào?',
    },
    {
      speaker: 'Miller',
      japanese: '父と母と弟がいます。',
      romaji: 'Chichi to haha to otōto ga imasu.',
      vietnamese: 'Tôi có bố, mẹ và em trai.',
    },
    {
      speaker: 'A',
      japanese: 'ご両親はどこに住んでいますか。',
      romaji: 'Go-ryōshin wa doko ni sunde imasu ka.',
      vietnamese: 'Bố mẹ anh đang sống ở đâu?',
    },
    {
      speaker: 'Miller',
      japanese: '大阪に住んでいます。父は会社員で、母は教師です。',
      romaji: 'Ōsaka ni sunde imasu. Chichi wa kaishain de, haha wa kyōshi desu.',
      vietnamese: 'Họ sống ở Osaka. Bố tôi là nhân viên công ty, mẹ tôi là giáo viên.',
    },
    {
      speaker: 'A',
      japanese: '弟さんは？',
      romaji: 'Otōto-san wa?',
      vietnamese: 'Thế em trai anh thì sao?',
    },
    {
      speaker: 'Miller',
      japanese: '大学で経済を勉強しています。',
      romaji: 'Daigaku de keizai o benkyō shite imasu.',
      vietnamese: 'Nó đang học kinh tế ở đại học.',
    },
    {
      speaker: 'A',
      japanese: 'ミラーさんはどこで働いていますか。',
      romaji: 'Mirā-san wa doko de hataraite imasu ka.',
      vietnamese: 'Anh Miller đang làm việc ở đâu?',
    },
    {
      speaker: 'Miller',
      japanese: '東京の会社で働いています。',
      romaji: 'Tōkyō no kaisha de hataraite imasu.',
      vietnamese: 'Tôi đang làm việc ở một công ty ở Tokyo.',
    },
  ],
  grammarPoints: [
    {
      title: '1. Vてもいいです – Được phép làm ~',
      body: 'Dùng để xin phép hoặc cho phép. Cấu trúc: Vて も いいです。Khi hỏi: 「Vて も いいですか。」',
      examples: [
        'ここで写真を撮ってもいいです。→ Chụp ảnh ở đây cũng được.',
        'この本を借りてもいいですか。→ Tôi mượn cuốn sách này được không?',
      ],
    },
    {
      title: '2. Vてはいけません – Không được làm ~',
      body: 'Dùng để diễn đạt điều cấm kỵ, không được phép. Thường dùng trong biển báo, nội quy.',
      examples: [
        'ここでたばこを吸ってはいけません。→ Không được hút thuốc ở đây.',
        '教室で携帯電話を使ってはいけません。→ Không được dùng điện thoại trong lớp.',
      ],
    },
    {
      title: '3. Vています – Nghề nghiệp, trạng thái đang tiếp diễn',
      body: 'Ngoài ý nghĩa “đang ~”, Vています còn chỉ trạng thái kéo dài hoặc nghề nghiệp, nơi ở.',
      examples: [
        'ミラーさんは銀行で働いています。→ Anh Miller đang làm việc ở ngân hàng.',
        '大阪に住んでいます。→ (Tôi) đang sống ở Osaka.',
      ],
      note: 'Bài 14 giới thiệu Vています cho hành động đang diễn ra; Bài 15 nhấn mạnh thêm nghĩa nghề nghiệp, thói quen, nơi ở.',
    },
  ],
};

// ---- Quiz cho mini game (tương tự bài 14) ----

export interface Lesson15VocabQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export interface Lesson15GrammarQuizItem {
  id: number;
  vi: string;
  options: readonly [string, string, string];
  correctIndex: number;
  explanationVi?: string;
}

export const lesson15VocabQuizItems: Lesson15VocabQuizItem[] = [
  {
    id: 1,
    vi: 'nhân viên công ty',
    options: ['会社員', '銀行員', '店員'],
    correctIndex: 0,
    explanationVi: '会社員 = nhân viên công ty.',
  },
  {
    id: 2,
    vi: 'bác sĩ',
    options: ['医者', '教師', 'エンジニア'],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'anh trai (mình)',
    options: ['兄', '弟', 'お兄さん'],
    correctIndex: 0,
    explanationVi: '兄 = anh trai (mình); お兄さん dùng khi nói về anh trai người khác.',
  },
  {
    id: 4,
    vi: 'em gái (mình)',
    options: ['妹', 'お姉さん', '姉'],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'nhân viên ngân hàng',
    options: ['銀行員', '公務員', '店員'],
    correctIndex: 0,
  },
];

export const lesson15GrammarQuizItems: Lesson15GrammarQuizItem[] = [
  {
    id: 1,
    vi: 'Tôi hút thuốc ở đây được không?',
    options: [
      'ここでたばこを吸ってもいいですか。',
      'ここでたばこを吸ってはいけません。',
      'ここでたばこを吸いますか。',
    ],
    correctIndex: 0,
    explanationVi: 'Hỏi xin phép dùng 「Vて も いいですか」。',
  },
  {
    id: 2,
    vi: 'Không được hút thuốc ở đây.',
    options: [
      'ここでたばこを吸ってはいけません。',
      'ここでたばこを吸ってもいいです。',
      'ここでたばこを吸います。',
    ],
    correctIndex: 0,
  },
  {
    id: 3,
    vi: 'Anh Miller đang làm việc ở ngân hàng.',
    options: [
      'ミラーさんは銀行で働いています。',
      'ミラーさんは銀行で働きます。',
      'ミラーさんは銀行で働きました。',
    ],
    correctIndex: 0,
    explanationVi: 'Nghề nghiệp hiện tại dùng Vています.',
  },
  {
    id: 4,
    vi: 'Bố tôi đang sống ở Osaka.',
    options: [
      '父は大阪に住んでいます。',
      '父は大阪に住みます。',
      '父は大阪に住みました。',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    vi: 'Em trai tôi đang học kinh tế ở đại học.',
    options: [
      '弟は大学で経済を勉強しています。',
      '弟は大学で経済を勉強します。',
      '弟は大学で経済を勉強しました。',
    ],
    correctIndex: 0,
  },
];

