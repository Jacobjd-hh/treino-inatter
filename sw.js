// Service worker: guarda o aplicativo e todas as imagens para funcionar sem internet.
const CACHE = "treino-inatter-237aa8dfa0";
const ASSETS = ["./", "index.html", "manifest.json", "icon.png", "img/q000.jpg", "img/q001.jpg", "img/q002.jpg", "img/q003.jpg", "img/q004.jpg", "img/q005.jpg", "img/q006.jpg", "img/q007.jpg", "img/q008.jpg", "img/q009.jpg", "img/q010.jpg", "img/q011.jpg", "img/q012.jpg", "img/q013.jpg", "img/q014.jpg", "img/q015.jpg", "img/q016.jpg", "img/q017.jpg", "img/q018.jpg", "img/q019.jpg", "img/q020.jpg", "img/q021.jpg", "img/q022.jpg", "img/q023.jpg", "img/q024.jpg", "img/q025.jpg", "img/q026.jpg", "img/q027.jpg", "img/q028.jpg", "img/q029.jpg", "img/q030.jpg", "img/q031.jpg", "img/q032.jpg", "img/q033.jpg", "img/q034.jpg", "img/q035.jpg", "img/q036.jpg", "img/q037.jpg", "img/q038.jpg", "img/q039.jpg", "img/q040.jpg", "img/q041.jpg", "img/q042.jpg", "img/q043.jpg", "img/q044.jpg", "img/q045.jpg", "img/q046.jpg", "img/q047.jpg", "img/q048.jpg", "img/q049.jpg", "img/q050.jpg", "img/q051.jpg", "img/q052.jpg", "img/q053.jpg", "img/q054.jpg", "img/q055.jpg", "img/q056.jpg", "img/q057.jpg", "img/q058.jpg", "img/q059.jpg", "img/q060.jpg", "img/q061.jpg", "img/q062.jpg", "img/q063.jpg", "img/q064.jpg", "img/q065.jpg", "img/q066.jpg", "img/q067.jpg", "img/q068.jpg", "img/q069.jpg", "img/q070.jpg", "img/q071.jpg", "img/q072.jpg", "img/q073.jpg", "img/q074.jpg", "img/q075.jpg", "img/q076.jpg", "img/q077.jpg", "img/q078.jpg", "img/q079.jpg", "img/q080.jpg", "img/q081.jpg", "img/q082.jpg", "img/q083.jpg", "img/q084.jpg", "img/q085.jpg", "img/q086.jpg", "img/q087.jpg", "img/q088.jpg", "img/q089.jpg", "img/q090.jpg", "img/q091.jpg", "img/q092.jpg", "img/q093.jpg", "img/q094.jpg", "img/q095.jpg", "img/q096.jpg", "img/q097.jpg", "img/q098.jpg", "img/q099.jpg", "img/q100.jpg", "img/q101.jpg", "img/q102.jpg", "img/q103.jpg", "img/q104.jpg", "img/q105.jpg", "img/q106.jpg", "img/q107.jpg", "img/q108.jpg", "img/q109.jpg", "img/q110.jpg", "img/q111.jpg", "img/q112.jpg", "img/q113.jpg", "img/q114.jpg", "img/q115.jpg", "img/q116.jpg", "img/q117.jpg", "img/q118.jpg", "img/q119.jpg", "img/q120.jpg", "img/q121.jpg", "img/q122.jpg", "img/q123.jpg", "img/q124.jpg", "img/q125.jpg", "img/q126.jpg", "img/q127.jpg", "img/q128.jpg", "img/q129.jpg", "img/q130.jpg", "img/q131.jpg", "img/q132.jpg", "img/q133.jpg", "img/q134.jpg", "img/q135.jpg", "img/q136.jpg", "img/q137.jpg", "img/q138.jpg", "img/q139.jpg", "img/q140.jpg", "img/q141.jpg", "img/q142.jpg", "img/q143.jpg", "img/q144.jpg", "img/q145.jpg", "img/q146.jpg", "img/q147.jpg", "img/q148.jpg", "img/q149.jpg", "img/q150.jpg", "img/q151.jpg", "img/q152.jpg", "img/q153.jpg", "img/q154.jpg", "img/q155.jpg", "img/q156.jpg", "img/q157.jpg", "img/q158.jpg", "img/q159.jpg", "img/q160.jpg", "img/q161.jpg", "img/q162.jpg", "img/q163.jpg", "img/q164.jpg", "img/q165.jpg", "img/q166.jpg", "img/q167.jpg", "img/q168.jpg", "img/q169.jpg", "img/q170.jpg", "img/q171.jpg", "img/q172.jpg", "img/q173.jpg", "img/q174.jpg", "img/q175.jpg", "img/q176.jpg", "img/q177.jpg", "img/q178.jpg", "img/q179.jpg", "img/q180.jpg", "img/q181.jpg", "img/q182.jpg", "img/q183.jpg", "img/q184.jpg", "img/q185.jpg", "img/q186.jpg", "img/q187.jpg", "img/q188.jpg", "img/q189.jpg", "img/q190.jpg", "img/q191.jpg", "img/q192.jpg", "img/q193.jpg", "img/q194.jpg", "img/q195.jpg", "img/q196.jpg", "img/q197.jpg", "img/q198.jpg", "img/q199.jpg", "img/q200.jpg", "img/q201.jpg", "img/q202.jpg", "img/q203.jpg", "img/q204.jpg", "img/q205.jpg", "img/q206.jpg", "img/q207.jpg", "img/q208.jpg", "img/q209.jpg", "img/q210.jpg", "img/q211.jpg", "img/q212.jpg", "img/q213.jpg", "img/q214.jpg", "img/q215.jpg", "img/q216.jpg", "img/q217.jpg", "img/q218.jpg", "img/q219.jpg", "img/q220.jpg", "img/q221.jpg", "img/q222.jpg", "img/q223.jpg", "img/q224.jpg", "img/q225.jpg", "img/q226.jpg", "img/q227.jpg", "img/q228.jpg", "img/q229.jpg", "img/q230.jpg", "img/q231.jpg", "img/q232.jpg", "img/q233.jpg", "img/q234.jpg", "img/q235.jpg", "img/q236.jpg", "img/q237.jpg", "img/q238.jpg", "img/q239.jpg", "img/q240.jpg", "img/q241.jpg", "img/q242.jpg", "img/q243.jpg", "img/q244.jpg", "img/q245.jpg", "img/q246.jpg", "img/q247.jpg", "img/q248.jpg", "img/q249.jpg", "img/q250.jpg", "img/q251.jpg", "img/q252.jpg", "img/q253.jpg", "img/q254.jpg", "img/q255.jpg", "img/q256.jpg", "img/q257.jpg", "img/q258.jpg", "img/q259.jpg", "img/q260.jpg", "img/q261.jpg", "img/q262.jpg", "img/q263.jpg", "img/q264.jpg", "img/q265.jpg", "img/q266.jpg", "img/q267.jpg", "img/q268.jpg", "img/q269.jpg", "img/q270.jpg", "img/q271.jpg", "img/q272.jpg", "img/q273.jpg", "img/q274.jpg", "img/q275.jpg", "img/q276.jpg", "img/q277.jpg", "img/q278.jpg", "img/q279.jpg", "img/q280.jpg", "img/q281.jpg", "img/q282.jpg", "img/q283.jpg", "img/q284.jpg", "img/q285.jpg", "img/q286.jpg", "img/q287.jpg", "img/q288.jpg", "img/q289.jpg", "img/q290.jpg", "img/q291.jpg", "img/q292.jpg", "img/q293.jpg", "img/q294.jpg", "img/q295.jpg", "img/q296.jpg", "img/q297.jpg", "img/q298.jpg", "img/q299.jpg", "img/q300.jpg", "img/q301.jpg", "img/q302.jpg", "img/q303.jpg", "img/q304.jpg", "img/q305.jpg", "img/q306.jpg", "img/q307.jpg", "img/q308.jpg", "img/q309.jpg", "img/q310.jpg", "img/q311.jpg", "img/q312.jpg", "img/q313.jpg", "img/q314.jpg", "img/q315.jpg", "img/q316.jpg", "img/q317.jpg", "img/q318.jpg", "img/q319.jpg", "img/q320.jpg", "img/q321.jpg", "img/q322.jpg", "img/q323.jpg", "img/q324.jpg", "img/q325.jpg", "img/q326.jpg", "img/q327.jpg", "img/q328.jpg", "img/q329.jpg", "img/q330.jpg", "img/q331.jpg", "img/q332.jpg", "img/q333.jpg", "img/q334.jpg", "img/q335.jpg", "img/q336.jpg", "img/q337.jpg", "img/q338.jpg", "img/q339.jpg", "img/q340.jpg", "img/q341.jpg", "img/q342.jpg", "img/q343.jpg", "img/q344.jpg", "img/q345.jpg", "img/q346.jpg", "img/q347.jpg", "img/q348.jpg", "img/q349.jpg", "img/q350.jpg", "img/q351.jpg", "img/q352.jpg", "img/q353.jpg", "img/q354.jpg", "img/q355.jpg", "img/q356.jpg", "img/q357.jpg", "img/q358.jpg", "img/q359.jpg", "img/q360.jpg", "img/q361.jpg", "img/q362.jpg", "img/q363.jpg", "img/q364.jpg", "img/q365.jpg", "img/q366.jpg", "img/q367.jpg", "img/q368.jpg", "img/q369.jpg", "img/q370.jpg", "img/q371.jpg", "img/q372.jpg", "img/q373.jpg", "img/q374.jpg", "img/q375.jpg", "img/q376.jpg", "img/q377.jpg", "img/q378.jpg", "img/q379.jpg", "img/q380.jpg", "img/q381.jpg", "img/q382.jpg", "img/q383.jpg", "img/q384.jpg", "img/q385.jpg", "img/q386.jpg", "img/q387.jpg", "img/q388.jpg", "img/q389.jpg", "img/q390.jpg", "img/q391.jpg", "img/q392.jpg", "img/q393.jpg", "img/q394.jpg", "img/q395.jpg", "img/q396.jpg", "img/q397.jpg", "img/q398.jpg", "img/q399.jpg", "img/q400.jpg", "img/q401.jpg", "img/q402.jpg", "img/q403.jpg", "img/q404.jpg", "img/q405.jpg", "img/q406.jpg", "img/q407.jpg", "img/q408.jpg", "img/q409.jpg", "img/q410.jpg", "img/q411.jpg", "img/q412.jpg", "img/q413.jpg", "img/q414.jpg", "img/q415.jpg", "img/q416.jpg", "img/q417.jpg", "img/q418.jpg", "img/q419.jpg", "img/q420.jpg", "img/q421.jpg", "img/q422.jpg", "img/q423.jpg", "img/q424.jpg", "img/q425.jpg", "img/q426.jpg", "img/q427.jpg", "img/q428.jpg", "img/q429.jpg"];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(c =>
    Promise.allSettled(ASSETS.map(a => c.add(new Request(a, { cache: 'reload' }))))
  ));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('treino-inatter-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Página principal: tenta a rede (para receber atualizações), senão usa a cópia guardada.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put('index.html', copy));
        return res;
      }).catch(() => caches.match('index.html', { ignoreSearch: true }))
    );
    return;
  }
  // Imagens, ícone, fontes: usa a cópia guardada; se não houver, vai à rede e guarda.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque') && (url.origin === location.origin || url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com'))) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }))
  );
});
