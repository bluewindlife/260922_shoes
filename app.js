(() => {
  'use strict';

  const metrics = [
    ['heel', 'かかと保持・靴ずれ'],
    ['fatigue', '長時間の疲れにくさ'],
    ['forefoot', '前足部・横幅'],
    ['cushion', 'クッション性'],
    ['softness', '足当たりの柔らかさ'],
    ['stability', '歩行時の安定性']
  ];

  const products = [
    {
      id:'sd007451', baseline:true, rank:0,
      brand:'maRe maRe', title:'つやリボンパンプ', code:'SD007451',
      price:'¥6,600', status:'基準モデル（旧モデル）',
      heel:'約2.5cm', width:'EE系', weight:'—', toe:'ラウンド系',
      confidence:'基準：実使用＋公式情報',
      url:'https://www.maremare-store.com/campaign/2023/02/27/2451/',
      reviewUrl:'https://www.maremare-store.com/campaign/2023/02/27/2451/',
      images:[
        {label:'公式・商品/着用', alt:'maRe maRe SD007451 公式紹介画像', sources:['https://www.maremare-store.com/wp-content/uploads/2023/02/WPSD9-3-scaled.jpg']},
        {label:'公式・着用', alt:'maRe maRe SD007451 公式着用画像', sources:['https://www.maremare-store.com/wp-content/uploads/2023/02/WPSD8-3.jpg']}
      ],
      ratings:{heel:6.5,fatigue:8.0,forefoot:8.5,cushion:7.5,softness:9.0,stability:7.5},
      diffs:{heel:'基準',fatigue:'基準',forefoot:'基準',cushion:'基準',softness:'基準',stability:'基準'},
      fit:'横幅は実使用で「ピッタリ」。一方、前後方向が少し緩い可能性があり、かかとの抜け・靴ずれが現在の改善ポイント。',
      good:'柔らかな人工皮革と低めのヒール。現状、横幅方向のフィットは良好。',
      caution:'新しい候補では「幅を広げすぎず、かかと保持を上げる」ことが重要。単純に4Eへ広げるだけでは前後の緩さが悪化する可能性がある。',
      reviews:[
        {text:'公式特集では、幅広・甲高を含むリピーターから、柔らかさや長時間使用の楽さを評価する声が紹介されている。', source:'maRe maRe公式特集', url:'https://www.maremare-store.com/campaign/2023/02/27/2451/'}
      ]
    },
    {
      id:'sgt606', rank:1,
      brand:'MOONSTAR SUGATA', title:'MS SGT606', code:'48900516',
      price:'¥8,250', status:'販売中／サイズ別在庫は公式で確認',
      heel:'3.0cm', width:'3E', weight:'約185g (23.0cm)', toe:'ソフトスクエア',
      confidence:'評価確度：高',
      url:'https://www.moonstar.co.jp/store/products/detail/48900516',
      reviewUrl:'https://review.rakuten.co.jp/item/1/221738_10037499/1.1/',
      images:[
        {label:'公式・商品', alt:'MOONSTAR SUGATA MS SGT606 ブラック', sources:['https://www.moonstar.co.jp/store/upload/save_image/48900516_3.jpg']}
      ],
      ratings:{heel:9.0,fatigue:9.0,forefoot:9.0,cushion:9.0,softness:8.5,stability:9.0},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'↑',cushion:'↑↑',softness:'→',stability:'↑↑'},
      fit:'今回の課題に最も直接的。3Eでも、履き口パッドで「踵抜けしにくくする」設計が明示されている。24.0〜24.5cm境界の日本語レビューも参考度が高い。',
      good:'荷重分散するアナトミーインソール＋マザータッチ、ボロネーゼ製法、安定性を狙った独自アウトソール。3cm・3E・185g。',
      caution:'24.5cmでかかとが約1cm余ったという購入者例がある。購入時は24.0/24.5の比較試着が特に重要。',
      reviews:[
        {text:'普段24.0〜24.5cmの購入者は24.5cmで踵が約1cm余り、24.0cmへ交換するとぴったりだったと報告。今回の足長条件に近く参考度が高い。', source:'楽天・ムーンスター公式ショップ購入者', url:'https://review.rakuten.co.jp/item/1/221738_10037499/1.1/'}
      ]
    },
    {
      id:'fitfit85601', rank:2,
      brand:'fitfit', title:'撥水ニット2WAYフラットシューズ', code:'85601 / FI5856BW10560',
      price:'通常 ¥10,890', status:'24.0/24.5cm 品切れ（調査時）',
      heel:'1.5cm', width:'3E', weight:'216g', toe:'ポインテッド',
      confidence:'評価確度：中〜高',
      url:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW10560/',
      reviewUrl:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW10560/',
      images:[
        {label:'公式・商品', alt:'fitfit 撥水ニット2WAYフラットシューズ ブラック', sources:['https://sc3.locondo.jp/contents/commodity_image/FI/FI5856BW10560_1_m.jpg']},
        {label:'公式・着用', alt:'fitfit 撥水ニット2WAYフラットシューズ ブラック 着用', sources:['https://sc3.locondo.jp/contents/commodity_image/FI/FI5856BW10560_21_m.jpg']}
      ],
      ratings:{heel:9.0,fatigue:8.5,forefoot:8.0,cushion:8.5,softness:9.0,stability:8.5},
      diffs:{heel:'↑↑',fatigue:'↑',forefoot:'→',cushion:'↑',softness:'→',stability:'↑'},
      fit:'「擦れにくくスッと履ける踵クッション」とハンズフリー設計が、7451のかかと課題に合う。3Eだがポインテッドなので前足部は要試着。',
      good:'撥水ニット、立体カップインソール、衝撃吸収、広い接地面の1.5cmヒール。アンクレットは取り外し可能。',
      caution:'ブラックの24.0/24.5cmは調査時点で品切れ。日本語レビュー本文を十分取得できず、評価は主に公式構造から推定。',
      reviews:[]
    },
    {
      id:'pedala1212a116', rank:3,
      brand:'ASICS WALKING / PEDALA', title:'ペダラ レディース 3E', code:'1212A116-001',
      price:'¥27,500', status:'販売中／サイズ別在庫は公式で確認',
      heel:'3.0cm', width:'3E', weight:'—', toe:'オブリーク',
      confidence:'評価確度：高',
      url:'https://walking.asics.com/items/1212A116-001',
      reviewUrl:'https://walking.asics.com/items/1212A116-001',
      images:[
        {label:'公式・商品', alt:'PEDALA 1212A116-001 ブラック', sources:['https://walking.asics.com/images/item/1212A116-001/1212A116-001_c001_a001_pm.jpg']},
        {label:'公式・別角度', alt:'PEDALA 1212A116-001 ブラック 別角度', sources:['https://walking.asics.com/images/item/1212A116-001/1212A116-001_c001_a003_pm.jpg']}
      ],
      ratings:{heel:9.0,fatigue:9.5,forefoot:9.0,cushion:9.5,softness:8.5,stability:9.5},
      diffs:{heel:'↑↑',fatigue:'↑↑',forefoot:'↑',cushion:'↑↑',softness:'→',stability:'↑↑'},
      fit:'パンプスではなく明確にスニーカー寄りだが、長時間通勤の「履き心地上限」を見る比較対象として強い。紐は固定したままサイドファスナーで着脱できる。',
      good:'SOLYTEミッドソール＋踵GEL＋中足部トラスティック。3Eオブリークラストで、長時間歩行向けの構成が充実。',
      caution:'見た目は他候補よりスニーカー寄り。価格も高い。ただし価格は履き心地評価に含めていない。',
      reviews:[
        {text:'公式購入者レビューでは「ほぼ毎日・一日中」使用しても疲れにくく、軽く歩きやすいとの報告がある。', source:'ASICS WALKING公式購入者レビュー', url:'https://walking.asics.com/items/1212A116-001'},
        {text:'幅広で靴選びに悩んでいた購入者から、フィットとファスナー着脱を評価する声がある。', source:'ASICS WALKING公式購入者レビュー', url:'https://walking.asics.com/items/1212A116-001'}
      ]
    },
    {
      id:'tila', rank:4,
      brand:'VIVAIA', title:'Tila エクストラワイド フラット', code:'shflatse2509150042001',
      price:'¥17,900', status:'販売中／在庫限り表示',
      heel:'0.7cm', width:'つま先幅87mm', weight:'—', toe:'ラウンド/スクエア系',
      confidence:'評価確度：中〜高',
      url:'https://vivaia.jp/products/flats-tila-black',
      reviewUrl:'https://vivaia.jp/products/flats-tila-paleapricotolive',
      images:[
        {label:'公式・商品', alt:'VIVAIA Tila ブラック', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1774323929-6e331127-4745-418f-8b69-bd4005159f1b.jpg?crop=center&height=1000&v=1777446282&width=1000']},
        {label:'公式・かかと', alt:'VIVAIA Tila ブラック かかと', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1774323929-51a5d29f-e341-4916-946a-f7b9e6e5b515.jpg?crop=center&height=1000&v=1777446282&width=1000']}
      ],
      ratings:{heel:8.5,fatigue:7.5,forefoot:9.5,cushion:7.5,softness:9.0,stability:7.5},
      diffs:{heel:'↑',fatigue:'→',forefoot:'↑↑',cushion:'→',softness:'→',stability:'→'},
      fit:'前足部の解放感は非常に強い候補。かかとパッドもある。一方、日本語レビューには「ソールが薄く長距離には向かない」との具体的な指摘があり、通勤長時間では要試着。',
      good:'VIVAIA史上もっともゆったりとした87mmのつま先幅、靴擦れ対策のかかとパッド、柔らかなニット。',
      caution:'幅を広げること自体は今回の主課題ではない。前後のフィットとかかと保持が合うかを優先確認したい。',
      reviews:[
        {text:'幅広甲高の購入者から、内反小趾付近の痛みがなく快適だったとの評価。', source:'VIVAIA公式・日本語レビュー', url:'https://vivaia.jp/products/flats-tila-paleapricotolive'},
        {text:'4E程度の幅広足では前足部は快適だった一方、ソールが薄く長距離歩行には向かないとの指摘もある。', source:'VIVAIA公式・日本語レビュー', url:'https://vivaia.jp/products/flats-tila-paleapricotolive'}
      ]
    },
    {
      id:'margotwide', rank:5,
      brand:'VIVAIA', title:'Margot 2.0 Wide', code:'shflatse2205100001033',
      price:'¥17,900', status:'販売中',
      heel:'1.0cm', width:'エクストラワイド（5Eまで対応）', weight:'—', toe:'スクエア',
      confidence:'評価確度：中〜高',
      url:'https://vivaia.jp/products/flats-margot2wide-black',
      reviewUrl:'https://vivaia.jp/products/flats-margot2wide-black',
      images:[
        {label:'公式・商品', alt:'VIVAIA Margot 2.0 Wide ブラック', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/Frame23_73681563-e3dc-47f6-b442-c902bd3d0a01-826548.jpg?crop=center&height=1000&v=1730959449&width=1000']},
        {label:'公式・かかと', alt:'VIVAIA Margot 2.0 Wide ブラック かかと', sources:['https://cdn.shopify.com/s/files/1/0532/3063/3157/files/1657524556-87cbb91f-6b9f-4cab-823c-00643ea68374_1.jpg?crop=center&height=1000&v=1729149101&width=1000']}
      ],
      ratings:{heel:7.5,fatigue:8.0,forefoot:9.5,cushion:8.5,softness:9.5,stability:8.0},
      diffs:{heel:'↑',fatigue:'→',forefoot:'↑↑',cushion:'↑',softness:'↑',stability:'→'},
      fit:'幅広適性と柔らかさは強い。ただし「足先に余裕がありすぎる」という日本語レビューもあり、7451で前後が少し緩い今回にはサイズ合わせが重要。',
      good:'5Eまで対応するワイド設計。PUフォーム系インソールが踵・アーチ・前足部をサポートし、クッションパッドも備える。',
      caution:'幅が必要以上に広いと、足が前後に動く可能性がある。幅広＝今回の最適解とは限らない。',
      reviews:[
        {text:'幅広・甲高ユーザーから、柔らかさと幅の余裕を高く評価する声が多い。', source:'VIVAIA公式・日本語レビュー', url:'https://vivaia.jp/products/flats-margot2wide-black'},
        {text:'一方で、幅は合うものの足先側に余裕がありすぎると感じたレビューもある。', source:'VIVAIA公式・日本語レビュー', url:'https://vivaia.jp/products/flats-margot2wide-black'}
      ]
    },
    {
      id:'lo17130', rank:6,
      brand:'Lady worker / ASICS Trading', title:'LO-17130', code:'LO-17130',
      price:'通常 ¥6,490', status:'販売中／一部サイズ在庫なし',
      heel:'3.0cm', width:'4E相当', weight:'約210g (23.0cm)', toe:'スクエア',
      confidence:'評価確度：高',
      url:'https://www.asics-trading.co.jp/shop/g/g1657008215/',
      reviewUrl:'https://shopping.yahoo.co.jp/products/z44cljsoc7/review/',
      images:[
        {label:'公式・商品', alt:'Lady worker LO-17130 ブラック', sources:['https://www.asics-trading.co.jp/img/goods/L/LO-17130_008.jpg']},
        {label:'公式・別角度', alt:'Lady worker LO-17130 ブラック 別角度', sources:['https://www.asics-trading.co.jp/img/goods/2/LO-17130_008.jpg']}
      ],
      ratings:{heel:8.0,fatigue:8.5,forefoot:9.5,cushion:8.5,softness:8.0,stability:8.5},
      diffs:{heel:'↑',fatigue:'↑',forefoot:'↑↑',cushion:'↑',softness:'→',stability:'↑'},
      fit:'履き口・かかと周りを締めるラストで4Eの割に踵保持を狙っている。ただし前後余裕や履き口の擦れを報告する購入者もいて、今回の足には試着必須。',
      good:'4E相当、立体中敷、アーチサポート、衝撃緩衝、柔らかいラバー、もちもち系中敷。仕事靴として機能が明確。',
      caution:'4Eは7451よりかなりワイド。横幅が現状ピッタリなら、靴内部のボリュームが余りすぎないか確認が必要。',
      reviews:[
        {text:'幅広甲高で普段24.5cmの購入者は、24.5cmで痛みがなく、歩いてもパカパカしなかったと評価。', source:'Yahoo!・アシックス商事公式店購入者', url:'https://shopping.yahoo.co.jp/products/z44cljsoc7/review/'},
        {text:'別の24.0〜24.5cmユーザーは24.0cmでも踵側に少し余裕があり、履き口に軽い擦れを感じたと報告。個人差が大きい。', source:'楽天購入者レビュー', url:'https://review.rakuten.co.jp/item/1/255154_10022974/1.1/'}
      ]
    },
    {
      id:'treebreezers', rank:7,
      brand:'Allbirds', title:'Tree Breezers', code:'ABW240063 / Jet Black',
      price:'通常 ¥15,950', status:'セール販売あり（調査時）',
      heel:'ほぼフラット', width:'幅表記なし・伸縮ニット', weight:'—', toe:'バレエ',
      confidence:'評価確度：中',
      url:'https://www.goldwin.co.jp/ap/item/i/m/ABW240063',
      reviewUrl:'',
      images:[
        {label:'公式・商品', alt:'Allbirds Tree Breezers Jet Black', sources:['https://itemimg.goldwin.co.jp/itemimg/GDW22/A0GDW0001GXY/02_AO01-432.jpg']},
        {label:'公式・別角度', alt:'Allbirds Tree Breezers Jet Black 別角度', sources:['https://itemimg.goldwin.co.jp/itemimg/GDW22/A0GDW0001GXY/03_051-432.jpg']}
      ],
      ratings:{heel:7.5,fatigue:8.0,forefoot:8.0,cushion:8.0,softness:10.0,stability:7.5},
      diffs:{heel:'↑',fatigue:'→',forefoot:'→',cushion:'↑',softness:'↑↑',stability:'→'},
      fit:'足当たりの柔らかさは候補中トップ級。伸縮メッシュで横幅に追従するが、3E等のワイドラストではなく、かかと保持も専用構造の説明が少ない。',
      good:'ユーカリ由来の伸縮メッシュ、SweetFoam系クッション、柔らかなバレエ形状。仕事服にも合わせやすい見た目。',
      caution:'公式日本サイトで今回の判断に使える日本語購入者レビューを十分確認できなかった。幅広＋踵課題との相性は試着優先。',
      reviews:[]
    },
    {
      id:'allday319', rank:8,
      brand:'ACHILLES / ALL DAY Walk', title:'ALL DAY Walk 319', code:'ALD3190-B',
      price:'¥8,690', status:'販売中',
      heel:'1.5cm', width:'2E', weight:'約185g', toe:'スクエア',
      confidence:'評価確度：高',
      url:'https://achilles-webshop.com/products/ald3190-b',
      reviewUrl:'https://achilles-webshop.com/products/ald3190-b',
      images:[
        {label:'公式・商品', alt:'ALL DAY Walk 319 ブラック', sources:['https://achilles-webshop.com/cdn/shop/files/ALD3190-B-1.jpg?v=1742791688&width=1000']},
        {label:'公式・着用', alt:'ALL DAY Walk 319 ブラック 着用', sources:['https://cdn.shopify.com/s/files/1/0749/9494/2274/files/ALD3190-02_600x600.jpg?v=1742964962']}
      ],
      ratings:{heel:7.0,fatigue:8.5,forefoot:8.0,cushion:9.0,softness:8.5,stability:8.5},
      diffs:{heel:'→',fatigue:'↑',forefoot:'→',cushion:'↑↑',softness:'→',stability:'↑'},
      fit:'長時間歩行・クッションは強いが、公式購入者レビューに「少し歩くとかかとが靴擦れした」という具体的な反例があるため、今回の課題に対して順位を下げた。',
      good:'高反発EVAインソール、1.5cm、185g、防水、吸水速乾・抗菌防臭。2Eなので横幅は7451に比較的近い方向。',
      caution:'かかと靴擦れの購入者報告を重視。履いた瞬間の快適さだけで決めず、室内歩行で確認したい。',
      reviews:[
        {text:'クッション性が高く、足が疲れにくいと感じた購入者レビューがある。', source:'アキレス公式購入者レビュー', url:'https://achilles-webshop.com/products/ald3190-b'},
        {text:'別の購入者は軽さとフィット感を評価しつつ、少し歩くとかかとが靴擦れしたと報告している。', source:'アキレス公式購入者レビュー', url:'https://achilles-webshop.com/products/ald3190-b'}
      ]
    },
    {
      id:'a0646', rank:9,
      brand:'Belle & Sofa', title:'やわらかスエード バレエシューズ', code:'A0646',
      price:'¥11,000', status:'販売中・幅広特注あり',
      heel:'約1.5cm', width:'標準＋幅広特注', weight:'約145g (23.0cm)', toe:'ラウンド',
      confidence:'評価確度：中〜高',
      url:'https://www.belle-co.jp/c/pumps/a0646/a0646',
      reviewUrl:'https://store.shopping.yahoo.co.jp/yasashii-kutukoubou/y646.html',
      images:[
        {label:'公式・着用', alt:'Belle & Sofa A0646 ブラック 着用', sources:['https://belleandsofa.itembox.design/item/image/a0646-hyoshi-3.jpg']},
        {label:'公式・商品紹介', alt:'Belle & Sofa A0646 ブラック 商品紹介', sources:['https://belleandsofa.itembox.design/item/image/a0646-gazo-all-1.jpg']}
      ],
      ratings:{heel:8.0,fatigue:8.0,forefoot:8.5,cushion:7.5,softness:10.0,stability:7.5},
      diffs:{heel:'↑',fatigue:'→',forefoot:'→',cushion:'→',softness:'↑↑',stability:'→'},
      fit:'非常に柔らかく、かかとの擦れ対策として魅力。一方、柔らかさゆえにサイズが少し大きいと感じるレビューもあり、7451同様の前後余裕には注意。',
      good:'日本製、145g、柔らかな人工皮革、1.5cm。幅広特注も可能で、足当たりの優しさを最優先する候補。',
      caution:'購入者レビューには「普段サイズだと少し大きめ」という例もある。前後寸法の試着が重要。',
      reviews:[
        {text:'公式店購入者から、かかとが柔らかく靴擦れしなかったとの報告がある一方、普段サイズでは少し大きく感じたという声もある。', source:'Yahoo! Belle&Sofa公式店レビュー', url:'https://store.shopping.yahoo.co.jp/yasashii-kutukoubou/y646.html'},
        {text:'幅広特注の購入者レビューでは、柔らかさや痛みにくさを評価する声が多い。', source:'楽天・Belle&Sofa購入者レビュー', url:'https://review.rakuten.co.jp/item/1/245295_10000669/1.1/'}
      ]
    }
  ];

  const excluded = [
    {
      name:'fitfit 撥水バイカラーパンプス2',
      reason:'3E・ストレッチ素材・安定設計で有力だったが、公称ヒール3.5cmのため「上限3cm程度」から外した。',
      url:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW09990/'
    },
    {
      name:'fitfit メッシュバレエスニーカーLITE',
      reason:'3E・軽量・歩行向けだが、公称ヒール4.0cmのため候補外。',
      url:'https://fitfit.jp/commodity/SFIT0841D/FI5856BW010915/'
    },
    {
      name:'maRe maRe カラフルリボンフラット SD81625',
      reason:'7451と同じラストを使う近縁モデル。再現性は高いが、今回の「前後の緩さ・かかと抜け」を根本改善しにくい可能性があるため主候補から外した。',
      url:'https://voi.0101.co.jp/voi/wsg/wrt-5_mcd-CC009_cpg-207_pno-68_ino-01.html'
    },
    {
      name:'MOONSTAR SUGATA MS SGT501',
      reason:'SUGATAの履き心地設計は魅力だが、5cmヒールのため今回の条件外。SUGATAは3cmのSGT606を採用。',
      url:'https://www.moonstar.co.jp/store/products/detail/48900816'
    }
  ];

  const baseline = products[0];
  const candidates = products.slice(1);

  function diffClass(diff){
    if(diff === '↑↑') return 'up2';
    if(diff === '↑') return 'up';
    if(diff === '↓') return 'down';
    return 'same';
  }

  function mediaMarkup(item){
    const first = item.images[0];
    return '<div class="product-media">' +
      '<button class="product-main-button" type="button" aria-label="画像を拡大表示">' +
      '<img class="product-main-image" src="' + first.sources[0] + '" alt="' + first.alt + '" referrerpolicy="no-referrer">' +
      '</button><div class="image-fallback">画像を表示できません。公式ページから確認してください。</div></div>' +
      '<div class="thumb-rail" aria-label="画像を切り替える"></div>';
  }

  function ratingMarkup(item){
    return '<div class="rating-block"><h4 class="rating-title">履き心地の推定評価 <span class="confidence">（10点満点）</span></h4>' +
      metrics.map(function(m){
        const key=m[0], label=m[1], score=item.ratings[key], diff=item.diffs[key];
        return '<div class="rating-row">' +
          '<span class="rating-name">' + label + '</span>' +
          '<span class="rating-score">' + score.toFixed(1) + '</span>' +
          '<span class="diff ' + diffClass(diff) + '">' + diff + '</span>' +
          '<div class="rating-bar"><div class="rating-fill" style="width:' + (score*10) + '%"></div></div>' +
        '</div>';
      }).join('') + '</div>';
  }

  function reviewsMarkup(item){
    if(!item.reviews || !item.reviews.length){
      return '<div class="review-section"><h4>日本語レビュー</h4><p class="no-review">今回の判断に使える具体的な日本語レビューを十分確認できず。公式仕様・構造を中心に評価。</p></div>';
    }
    return '<div class="review-section"><h4>参考になる日本語レビュー要旨</h4>' +
      item.reviews.map(function(r){
        return '<div class="review-card"><p>' + r.text + '</p><a href="' + r.url + '" target="_blank" rel="noopener noreferrer">' + r.source + ' ↗</a></div>';
      }).join('') + '</div>';
  }

  function cardMarkup(item, baselineMode){
    const specs = [
      'ヒール ' + item.heel,
      '幅 ' + item.width,
      item.weight !== '—' ? item.weight : null,
      item.toe
    ].filter(Boolean);
    return '<article class="product-card" data-id="' + item.id + '">' +
      mediaMarkup(item) +
      '<div class="product-body">' +
        '<div class="top-row"><span class="rank ' + (baselineMode?'baseline-rank':'') + '">' + (baselineMode?'基準':'候補 ' + item.rank) + '</span><span class="confidence">' + item.confidence + '</span></div>' +
        '<p class="product-kicker">' + item.brand + '</p>' +
        '<h3 class="product-title">' + item.title + '</h3>' +
        '<p class="product-code">' + item.code + '</p>' +
        '<div class="price-row"><span class="price">' + item.price + '</span><span class="status">' + item.status + '</span></div>' +
        '<div class="spec-chips">' + specs.map(function(s){return '<span class="spec-chip">' + s + '</span>';}).join('') + '</div>' +
        '<div class="fit-callout"><span class="fit-label">' + (baselineMode?'実使用メモ':'7451から見たポイント') + '</span><p>' + item.fit + '</p></div>' +
        ratingMarkup(item) +
        '<div class="notes-grid"><div class="note-box good"><strong>適合ポイント</strong><p>' + item.good + '</p></div><div class="note-box caution"><strong>要確認</strong><p>' + item.caution + '</p></div></div>' +
        reviewsMarkup(item) +
        '<div class="link-row"><a class="product-link" href="' + item.url + '" target="_blank" rel="noopener noreferrer">公式ページを見る</a>' +
        (item.reviewUrl && item.reviewUrl !== item.url ? '<a class="product-link secondary" href="' + item.reviewUrl + '" target="_blank" rel="noopener noreferrer">レビュー元を見る</a>' : '') +
        '</div>' +
      '</div></article>';
  }

  function setImageWithFallback(img, media, view){
    let index=0;
    function tryNext(){
      if(index >= view.sources.length){ media.classList.add('is-error'); return; }
      img.src=view.sources[index++];
      img.alt=view.alt;
    }
    img.onerror=tryNext;
    img.onload=function(){media.classList.remove('is-error');};
    tryNext();
  }

  function setupGalleries(root){
    root.querySelectorAll('.product-card').forEach(function(card){
      const item=products.find(function(x){return x.id===card.dataset.id;});
      if(!item) return;
      const main=card.querySelector('.product-main-image');
      const media=card.querySelector('.product-media');
      const rail=card.querySelector('.thumb-rail');
      rail.innerHTML='';
      item.images.forEach(function(view,index){
        const b=document.createElement('button');
        b.className='thumb'; b.type='button';
        b.setAttribute('aria-current',index===0?'true':'false');
        b.setAttribute('aria-label',view.label+'を表示');
        b.innerHTML='<img src="'+view.sources[0]+'" alt="" referrerpolicy="no-referrer" loading="lazy">';
        b.addEventListener('click',function(){
          setImageWithFallback(main,media,view);
          rail.querySelectorAll('.thumb').forEach(function(x){x.setAttribute('aria-current',x===b?'true':'false');});
        });
        rail.appendChild(b);
      });
      setImageWithFallback(main,media,item.images[0]);
      const mainButton=card.querySelector('.product-main-button');
      if(mainButton) mainButton.addEventListener('click',function(){openLightbox(main.src,main.alt);});
    });
  }

  function renderExcluded(){
    const el=document.getElementById('excludedList');
    el.innerHTML=excluded.map(function(x){
      return '<article class="excluded-card"><h3>'+x.name+'</h3><p>'+x.reason+'</p><a href="'+x.url+'" target="_blank" rel="noopener noreferrer">参考ページ ↗</a></article>';
    }).join('');
  }

  function renderComparison(){
    const header='<thead><tr><th>モデル</th><th>ヒール</th><th>幅</th>' +
      metrics.map(function(m){return '<th>'+m[1]+'</th>';}).join('') + '</tr></thead>';
    const body='<tbody>' + products.map(function(item){
      return '<tr class="'+(item.baseline?'baseline-row':'')+'"><td>'+(item.baseline?'基準｜':'')+item.brand+' '+item.title+'</td><td>'+item.heel+'</td><td>'+item.width+'</td>' +
        metrics.map(function(m){return '<td>'+item.ratings[m[0]].toFixed(1)+'</td>';}).join('') + '</tr>';
    }).join('') + '</tbody>';
    document.getElementById('comparisonTable').innerHTML='<table class="compare-table">'+header+body+'</table>';
  }

  function render(){
    document.getElementById('baselineCard').innerHTML=cardMarkup(baseline,true);
    document.getElementById('candidateList').innerHTML=candidates.map(function(x){return cardMarkup(x,false);}).join('');
    renderExcluded();
    renderComparison();
    setupGalleries(document);
  }

  const lightbox=document.getElementById('lightbox');
  const lightboxImage=document.getElementById('lightboxImage');
  let scale=1,x=0,y=0,startDistance=0,startScale=1,lastX=0,lastY=0;
  function applyTransform(){lightboxImage.style.transform='translate('+x+'px,'+y+'px) scale('+scale+')';}
  function openLightbox(src,alt){
    lightboxImage.src=src; lightboxImage.alt=alt||'';
    scale=1;x=0;y=0;applyTransform();
    lightbox.hidden=false;document.body.classList.add('lightbox-open');
  }
  function closeLightbox(){lightbox.hidden=true;document.body.classList.remove('lightbox-open');}
  const closeButton=document.querySelector('.lightbox-close');
  if(closeButton) closeButton.addEventListener('click',closeLightbox);
  if(lightbox) lightbox.addEventListener('click',function(e){if(e.target===lightbox||e.target.classList.contains('lightbox-stage')) closeLightbox();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lightbox.hidden) closeLightbox();});
  const stage=lightbox?lightbox.querySelector('.lightbox-stage'):null;
  if(stage){
    stage.addEventListener('touchstart',function(e){
      if(e.touches.length===2){
        const a=e.touches[0],b=e.touches[1];
        startDistance=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);startScale=scale;
      } else if(e.touches.length===1){lastX=e.touches[0].clientX;lastY=e.touches[0].clientY;}
    },{passive:true});
    stage.addEventListener('touchmove',function(e){
      if(e.touches.length===2){
        const a=e.touches[0],b=e.touches[1];
        const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
        scale=Math.min(4,Math.max(1,startScale*d/startDistance));
        if(scale===1){x=0;y=0;} applyTransform();
      } else if(e.touches.length===1&&scale>1){
        const t=e.touches[0];x+=t.clientX-lastX;y+=t.clientY-lastY;lastX=t.clientX;lastY=t.clientY;applyTransform();
      }
    },{passive:true});
  }

  render();
})();