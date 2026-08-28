'use strict';
// ================== MOTOR i18n ==================
const I18N={
es:{
_title:"PulseWaveLab – Generador de Waveform Online Gratis | Ondas de Audio MP3 y MP4",
_desc:"Crea formas de onda y circular waves online gratis desde MP3 y MP4 con PulseWaveLab. Procesamiento 100% local en tu navegador: privado, rápido y sin subir archivos. Exporta MP4, PNG y SVG.",
langLabel:"Idioma",
heroTitle:"PulseWaveLab · Generador de Waveforms",
heroSub:"Transforma el audio de tus archivos MP3 y MP4 en impresionantes visualizaciones circulares. Procesamiento 100% local: rápido, privado y sin subir nada a la nube.",
adLabel:"Publicidad",
filesTitle:"1. Cargar Archivos",designTitle:"2. Diseño Visual",actionsTitle:"3. Acciones",
audioLabel:"Audios o Videos (MP3, WAV, MP4…):",dropHint:"…o arrastra y suelta tus archivos aquí",
barsLabel:"Cantidad de Barras:",capLabel:"Puntas de las Barras:",capRound:"Redondeadas",capButt:"Planas",
radiusLabel:"Radio Central:",heightLabel:"Sensibilidad / Altura:",thicknessLabel:"Grosor de Barras:",rangeLabel:"Rango de sensibilidad:",toneSensLabel:"Sensibilidad de tonos:",
waveColorLabel:"Color Onda:",bgColorLabel:"Color Fondo:",transparentLabel:"PNG con fondo transparente",
sizePresetLabel:"Formato:",sizeCustom:"Personalizado",sizeWidthLabel:"Ancho (px):",sizeHeightLabel:"Alto (px):",
previewBtn:"Previsualizar",stopPreviewBtn:"Detener Preview",exportBtn:"Exportar Video MP4",
pngBtn:"Descargar PNG",svgBtn:"Descargar SVG",
readyStatus:"Listo para procesar...",
audiosSelected:n=>`${n} archivo(s) seleccionado(s).`,
needAudioPreview:"Carga al menos un audio para previsualizar.",
listeningPreview:"Escuchando vista previa...",previewStopped:"Preview detenido.",
noWebCodecs:"Tu navegador no soporta WebCodecs. Usa Chrome o Edge actualizados.",
needAudios:"Carga tus pistas primero.",
decoding:"⚡ Decodificando audio en paralelo...",
rendering:"🚀 Renderizando en paralelo",
doneMsg:"✅ ¡Video MP4 generado exitosamente!",imgDone:"✅ ¡Imagen descargada!",
errorMsg:m=>`❌ ERROR: ${m}`,
workersInfo:n=>`🧠 Usando ${n} núcleos para renderizar`,
shortAudio:"El audio es demasiado corto para exportar.",
s1t:"Introducción al Generador de Waveforms",
s1p:"El generador de formas de onda es una herramienta digital optimizada para transformar la señal sonora de archivos MP3 y MP4 en representaciones visuales precisas, atractivas y personalizables. Con nuestra aplicación en línea, puedes crear ondas sonoras lineales clásicas o estilos modernos como las circular waves (ondas circulares) en cuestión de segundos. Al procesar el audio directamente desde la memoria RAM del dispositivo mediante tecnologías web avanzadas como Web Audio API y Canvas, la herramienta elimina por completo la necesidad de subir tus proyectos a servidores externos para obtener gráficos listos para producción.",
s2t:"Privacidad y Rendimiento en Procesamiento Local",
s2p:"A diferencia de los convertidores tradicionales en línea que requieren transferir datos pesados a la nube, el procesamiento local en el navegador (<em>client-side</em>) prioriza la seguridad de la información y la eficiencia energética. Los archivos multimediales nunca abandonan el equipo del usuario, lo que asegura una privacidad absoluta de los activos digitales y elimina el riesgo de filtraciones. Además, al no depender del ancho de banda de subida, puedes generar diseños de circular waves y formas de onda con pistas de gran duración o videos en formato MP4 de varios gigabytes sin experimentar interrupciones ni tiempos de espera.",
s3t:"Formatos Compatibles y Flexibilidad Tipológica",
s3p:"La herramienta soporta una amplia gama de contenedores y códecs de audio y video, destacando entre ellos los formatos universales MP3 y MP4. Durante la lectura del archivo, el sistema decodifica el canal de audio para extraer los datos de amplitud y frecuencia con una precisión milimétrica. Esta flexibilidad permite extraer la huella sonora de voces, bandas sonoras, efectos de sonido o fragmentos de video sin necesidad de conversiones previas, adaptándose a las necesidades técnicas de cualquier flujo de trabajo de diseño multimedia o producción audiovisual.",
s4t:"Personalización y Exportación Multiformato",
s4p:"Una vez generada la estructura visual de la onda, el sistema ofrece opciones completas de personalización para adaptarse a la identidad gráfica de cada proyecto. Los usuarios pueden ajustar colores, grosores de barra, densidad de muestreo, fondos transparentes y diversos estilos gráficos, destacando la creación de impresionantes circular waves para un acabado innovador. Al finalizar la edición, el resultado se puede exportar en formatos de alta resolución como PNG para uso directo en editores de video, o en gráficos vectoriales SVG para un escalado sin pérdida de calidad en diseño e impresiones.",
s5t:"Casos de Uso para Creadores y Diseñadores",
s5p:"La visualización de ondas de sonido y el uso de circular waves se han convertido en recursos fundamentales para la creación de contenido moderno, desde <em>audiograms</em> promocionales para redes sociales como YouTube Shorts, Instagram o TikTok, hasta elementos decorativos en portadas de álbumes y sitios web. Esta solución accesible y ligera simplifica el trabajo de diseñadores, ingenieros de sonido y creadores independientes, permitiéndoles generar recursos gráficos profesionales de alto impacto visual sin necesidad de instalar software pesado.",
faqTitle:"Preguntas Frecuentes (FAQ)",
q1:"¿Es seguro procesar mis archivos MP3 y MP4 en este generador de waveforms?",
a1:"Sí, es 100% seguro. El procesamiento ocurre localmente en tu navegador (<em>client-side</em>). Tus archivos no se suben a ningún servidor ni se almacenan en la nube.",
q2:"¿Puedo crear gráficos de circular waves a partir de un video MP4?",
a2:"Sí. La herramienta extrae automáticamente la pista de audio integrada en el contenedor MP4 para renderizar el patrón de circular waves u otros estilos sin requerir una conversión previa a MP3.",
q3:"¿Existe algún límite en el tamaño de los archivos?",
a3:"No hay límites de plataforma. La capacidad depende exclusivamente de la memoria RAM de tu dispositivo para decodificar el archivo en el navegador.",
q4:"¿En qué formatos puedo exportar las circular waves y waveforms generadas?",
a4:"Puedes exportar tus diseños en PNG con fondo transparente o en formato vectorial SVG, perfecto para software de diseño gráfico profesional.",
q5:"¿Necesito conexión a internet para usar la herramienta?",
a5:"Solo necesitas conexión para cargar la página por primera vez. Una vez cargada, la aplicación funciona de forma offline sin interrupciones.",
footerText:"© 2026 PulseWaveLab · Procesamiento 100% local en tu navegador · Sin registro · Sin subidas"
},
en:{
_title:"PulseWaveLab – Free Online Waveform Generator | MP3 & MP4 Audio Waves",
_desc:"Create stunning audio waveforms and circular waves online for free from MP3 and MP4 files with PulseWaveLab. 100% local processing in your browser: private, fast, no uploads. Export MP4, PNG and SVG.",
langLabel:"Language",
heroTitle:"PulseWaveLab · Waveform Generator",
heroSub:"Turn the audio from your MP3 and MP4 files into stunning circular visualizations. 100% local processing: fast, private, nothing uploaded to the cloud.",
adLabel:"Advertisement",
filesTitle:"1. Load Files",designTitle:"2. Visual Design",actionsTitle:"3. Actions",
audioLabel:"Audio or Video Files (MP3, WAV, MP4…):",dropHint:"…or drag and drop your files here",
barsLabel:"Number of Bars:",capLabel:"Bar Caps:",capRound:"Rounded",capButt:"Flat",
radiusLabel:"Center Radius:",heightLabel:"Sensitivity / Height:",thicknessLabel:"Bar Thickness:",rangeLabel:"Sensitivity Range:",toneSensLabel:"Tone Sensitivity:",
waveColorLabel:"Wave Color:",bgColorLabel:"Background Color:",transparentLabel:"Transparent background (PNG)",
sizePresetLabel:"Format:",sizeCustom:"Custom",sizeWidthLabel:"Width (px):",sizeHeightLabel:"Height (px):",
previewBtn:"Preview",stopPreviewBtn:"Stop Preview",exportBtn:"Export MP4 Video",
pngBtn:"Download PNG",svgBtn:"Download SVG",
readyStatus:"Ready to process...",
audiosSelected:n=>`${n} file(s) selected.`,
needAudioPreview:"Load at least one audio to preview.",
listeningPreview:"Playing preview...",previewStopped:"Preview stopped.",
noWebCodecs:"Your browser does not support WebCodecs. Use updated Chrome or Edge.",
needAudios:"Load your tracks first.",
decoding:"⚡ Decoding audio in parallel...",
rendering:"🚀 Rendering in parallel",
doneMsg:"✅ MP4 video successfully generated!",imgDone:"✅ Image downloaded!",
errorMsg:m=>`❌ ERROR: ${m}`,
workersInfo:n=>`🧠 Using ${n} cores to render`,
shortAudio:"The audio is too short to export.",
s1t:"Introduction to the Waveform Generator",
s1p:"The waveform generator is a digital tool optimized to transform the sound signal of MP3 and MP4 files into precise, attractive and customizable visual representations. With our online application, you can create classic linear sound waves or modern styles such as circular waves in a matter of seconds. By processing audio directly from the device's RAM through advanced web technologies such as Web Audio API and Canvas, the tool completely eliminates the need to upload your projects to external servers to obtain production-ready graphics.",
s2t:"Privacy and Performance with Local Processing",
s2p:"Unlike traditional online converters that require transferring heavy data to the cloud, local browser-side (<em>client-side</em>) processing prioritizes information security and energy efficiency. Media files never leave the user's computer, ensuring absolute privacy of digital assets and eliminating the risk of leaks. Moreover, since it does not depend on upload bandwidth, you can create circular waves and waveform designs from long tracks or multi-gigabyte MP4 videos without interruptions or waiting times.",
s3t:"Supported Formats and Typological Flexibility",
s3p:"The tool supports a wide range of audio and video containers and codecs, most notably the universal MP3 and MP4 formats. While reading the file, the system decodes the audio channel to extract amplitude and frequency data with pinpoint accuracy. This flexibility makes it possible to capture the sonic footprint of voices, soundtracks, sound effects or video clips without prior conversions, adapting to the technical requirements of any multimedia design or audiovisual production workflow.",
s4t:"Customization and Multi-Format Export",
s4p:"Once the visual structure of the wave has been generated, the system offers complete customization options to match the graphic identity of each project. Users can adjust colors, bar thickness, sampling density, transparent backgrounds and various graphic styles, highlighting the creation of stunning circular waves for an innovative finish. When editing is finished, the result can be exported in high-resolution formats such as PNG for direct use in video editors, or as SVG vector graphics for lossless scaling in design and printing.",
s5t:"Use Cases for Creators and Designers",
s5p:"Sound wave visualization and the use of circular waves have become fundamental resources for modern content creation, from promotional <em>audiograms</em> for social networks such as YouTube Shorts, Instagram or TikTok, to decorative elements on album covers and websites. This accessible, lightweight solution streamlines the work of designers, sound engineers and independent creators, enabling them to produce professional, high-impact graphic assets without installing heavy software.",
faqTitle:"Frequently Asked Questions (FAQ)",
q1:"Is it safe to process my MP3 and MP4 files in this waveform generator?",
a1:"Yes, it is 100% safe. Processing happens locally in your browser (<em>client-side</em>). Your files are not uploaded to any server nor stored in the cloud.",
q2:"Can I create circular wave graphics from an MP4 video?",
a2:"Yes. The tool automatically extracts the audio track embedded in the MP4 container to render the circular wave pattern or other styles, with no prior conversion to MP3 required.",
q3:"Is there any limit on file size?",
a3:"There are no platform limits. Capacity depends exclusively on your device's RAM to decode the file in the browser.",
q4:"In which formats can I export the generated circular waves and waveforms?",
a4:"You can export your designs in PNG with transparent background or in SVG vector format, perfect for professional graphic design software.",
q5:"Do I need an internet connection to use the tool?",
a5:"You only need a connection to load the page for the first time. Once loaded, the application works offline without interruptions.",
footerText:"© 2026 PulseWaveLab · 100% local processing in your browser · No sign-up · No uploads"
},
pt:{
_title:"PulseWaveLab – Gerador de Waveform Online Grátis | Ondas de Áudio MP3 e MP4",
_desc:"Crie impressionantes formas de onda e circular waves online grátis a partir de arquivos MP3 e MP4 com PulseWaveLab. Processamento 100% local no navegador: privado, rápido, sem uploads. Exporte MP4, PNG e SVG.",
langLabel:"Idioma",
heroTitle:"PulseWaveLab · Gerador de Waveforms",
heroSub:"Transforme o áudio dos seus arquivos MP3 e MP4 em visualizações circulares impressionantes. Processamento 100% local: rápido, privado e sem enviar nada para a nuvem.",
adLabel:"Publicidade",
filesTitle:"1. Carregar Arquivos",designTitle:"2. Design Visual",actionsTitle:"3. Ações",
audioLabel:"Arquivos de Áudio ou Vídeo (MP3, WAV, MP4…):",dropHint:"…ou arraste e solte seus arquivos aqui",
barsLabel:"Quantidade de Barras:",capLabel:"Pontas das Barras:",capRound:"Arredondadas",capButt:"Planas",
radiusLabel:"Raio Central:",heightLabel:"Sensibilidade / Altura:",thicknessLabel:"Espessura das Barras:",rangeLabel:"Faixa de sensibilidade:",toneSensLabel:"Sensibilidade de tons:",
waveColorLabel:"Cor da Onda:",bgColorLabel:"Cor do Fundo:",transparentLabel:"Fundo transparente (PNG)",
sizePresetLabel:"Formato:",sizeCustom:"Personalizado",sizeWidthLabel:"Largura (px):",sizeHeightLabel:"Altura (px):",
previewBtn:"Pré-visualizar",stopPreviewBtn:"Parar Preview",exportBtn:"Exportar Vídeo MP4",
pngBtn:"Baixar PNG",svgBtn:"Baixar SVG",
readyStatus:"Pronto para processar...",
audiosSelected:n=>`${n} arquivo(s) selecionado(s).`,
needAudioPreview:"Carregue pelo menos um áudio para pré-visualizar.",
listeningPreview:"Ouvindo prévia...",previewStopped:"Prévia parada.",
noWebCodecs:"Seu navegador não suporta WebCodecs. Use Chrome ou Edge atualizados.",
needAudios:"Carregue suas faixas primeiro.",
decoding:"⚡ Decodificando áudio em paralelo...",
rendering:"🚀 Renderizando em paralelo",
doneMsg:"✅ Vídeo MP4 gerado com sucesso!",imgDone:"✅ Imagem baixada!",
errorMsg:m=>`❌ ERRO: ${m}`,
workersInfo:n=>`🧠 Usando ${n} núcleos para renderizar`,
shortAudio:"O áudio é curto demais para exportar.",
s1t:"Introdução ao Gerador de Waveforms",
s1p:"O gerador de formas de onda é uma ferramenta digital otimizada para transformar o sinal sonoro de arquivos MP3 e MP4 em representações visuais precisas, atraentes e personalizáveis. Com nosso aplicativo online, você pode criar ondas sonoras lineais clássicas ou estilos modernos como as circular waves (ondas circulares) em questão de segundos. Ao processar o áudio diretamente da memória RAM do dispositivo por meio de tecnologias web avançadas como Web Audio API e Canvas, a ferramenta elimina por completo a necessidade de enviar seus projetos a servidores externos para obter gráficos prontos para produção.",
s2t:"Privacidade e Desempenho no Processamento Local",
s2p:"Diferentemente dos conversores tradicionais online que exigem transferir dados pesados para a nuvem, o processamento local no navegador (<em>client-side</em>) prioriza a segurança da informação e a eficiência energética. Os arquivos de mídia nunca saem do computador do usuário, o que assegura privacidade absoluta dos ativos digitais e elimina o risco de vazamentos. Além disso, por não depender da largura de banda de envio, você pode criar designs de circular waves e formas de onda com faixas longas ou vídeos MP4 de vários gigabytes sem interrupções nem tempos de espera.",
s3t:"Formatos Compatíveis e Flexibilidade Tipológica",
s3p:"A ferramenta suporta uma ampla gama de contêineres e codecs de áudio e vídeo, com destaque para os formatos universais MP3 e MP4. Durante a leitura do arquivo, o sistema decodifica o canal de áudio para extrair dados de amplitude e frequência com precisão milimétrica. Essa flexibilidade permite extrair a impressão sonora de vozes, trilhas sonoras, efeitos sonoros ou trechos de vídeo sem conversões prévias, adaptando-se às necessidades técnicas de qualquer fluxo de trabalho de design multimídia ou produção audiovisual.",
s4t:"Personalização e Exportação Multiformato",
s4p:"Depois de gerada a estrutura visual da onda, o sistema oferece opções completas de personalização para se adaptar à identidade gráfica de cada projeto. Os usuários podem ajustar cores, espessura das barras, densidade de amostragem, fundos transparentes e diversos estilos gráficos, com destaque para a criação de impressionantes circular waves para um acabamento inovador. Ao concluir a edição, o resultado pode ser exportado em formatos de alta resolução como PNG para uso direto em editores de vídeo, ou em vetores SVG para escalonamento sem perda de qualidade em design e impressão.",
s5t:"Casos de Uso para Criadores e Designers",
s5p:"A visualização de ondas sonoras e o uso de circular waves tornaram-se recursos fundamentais para a criação de conteúdo moderno, desde <em>audiograms</em> promocionais para redes sociais como YouTube Shorts, Instagram ou TikTok até elementos decorativos em capas de álbuns e sites. Essa solução acessível e leve simplifica o trabalho de designers, engenheiros de som e criadores independentes, permitindo-lhes gerar recursos gráficos profissionais de alto impacto visual sem instalar programas pesados.",
faqTitle:"Perguntas Frequentes (FAQ)",
q1:"É seguro processar meus arquivos MP3 e MP4 neste gerador de waveforms?",
a1:"Sim, é 100% seguro. O processamento acontece localmente no seu navegador (<em>client-side</em>). Seus arquivos não são enviados a nenhum servidor nem armazenados na nuvem.",
q2:"Posso criar gráficos de circular waves a partir de um vídeo MP4?",
a2:"Sim. A ferramenta extrai automaticamente a faixa de áudio incorporada ao contêiner MP4 para renderizar o padrão de circular waves ou outros estilos, sem exigir conversão prévia para MP3.",
q3:"Existe algum limite no tamanho dos arquivos?",
a3:"Não há limites de plataforma. A capacidade depende exclusivamente da memória RAM do seu dispositivo para decodificar o arquivo no navegador.",
q4:"Em quais formatos posso exportar as circular waves e waveforms geradas?",
a4:"Você pode exportar seus designs em PNG com fundo transparente ou em formato vetorial SVG, perfeito para softwares profissionais de design gráfico.",
q5:"Preciso de conexão com a internet para usar a ferramenta?",
a5:"Você só precisa de conexão para carregar a página pela primeira vez. Depois de carregada, o aplicativo funciona offline sem interrupções.",
footerText:"© 2026 PulseWaveLab · Processamento 100% local no seu navegador · Sem cadastro · Sem uploads"
},
fr:{
_title:"PulseWaveLab – Générateur de Waveform en Ligne Gratuit | Ondes Audio MP3 et MP4",
_desc:"Créez de superbes formes d'onde et circular waves en ligne gratuitement à partir de fichiers MP3 et MP4 avec PulseWaveLab. Traitement 100% local dans votre navigateur : privé, rapide, sans téléversement. Exportez en MP4, PNG et SVG.",
langLabel:"Langue",
heroTitle:"PulseWaveLab · Générateur de Waveforms",
heroSub:"Transformez l'audio de vos fichiers MP3 et MP4 en superbes visualisations circulaires. Traitement 100% local : rapide, privé, rien n'est envoyé dans le cloud.",
adLabel:"Publicité",
filesTitle:"1. Charger les Fichiers",designTitle:"2. Design Visuel",actionsTitle:"3. Actions",
audioLabel:"Fichiers Audio ou Vidéo (MP3, WAV, MP4…) :",dropHint:"…ou glissez-déposez vos fichiers ici",
barsLabel:"Nombre de Barres :",capLabel:"Extrémités des Barres :",capRound:"Arrondies",capButt:"Plates",
radiusLabel:"Rayon Central :",heightLabel:"Sensibilité / Hauteur :",thicknessLabel:"Épaisseur des Barres :",rangeLabel:"Plage de sensibilité :",toneSensLabel:"Sensibilité des tons :",
waveColorLabel:"Couleur de l'Onde :",bgColorLabel:"Couleur de Fond :",transparentLabel:"Fond transparent (PNG)",
sizePresetLabel:"Format :",sizeCustom:"Personnalisé",sizeWidthLabel:"Largeur (px) :",sizeHeightLabel:"Hauteur (px) :",
previewBtn:"Prévisualiser",stopPreviewBtn:"Arrêter l'Aperçu",exportBtn:"Exporter la Vidéo MP4",
pngBtn:"Télécharger PNG",svgBtn:"Télécharger SVG",
readyStatus:"Prêt à traiter...",
audiosSelected:n=>`${n} fichier(s) sélectionné(s).`,
needAudioPreview:"Chargez au moins un audio pour prévisualiser.",
listeningPreview:"Lecture de l'aperçu...",previewStopped:"Aperçu arrêté.",
noWebCodecs:"Votre navigateur ne prend pas en charge WebCodecs. Utilisez Chrome ou Edge à jour.",
needAudios:"Chargez d'abord vos pistes.",
decoding:"⚡ Décodage audio en parallèle...",
rendering:"🚀 Rendu en parallèle",
doneMsg:"✅ Vidéo MP4 générée avec succès !",imgDone:"✅ Image téléchargée !",
errorMsg:m=>`❌ ERREUR : ${m}`,
workersInfo:n=>`🧠 Utilisation de ${n} cœurs pour le rendu`,
shortAudio:"L'audio est trop court pour être exporté.",
s1t:"Introduction au Générateur de Waveforms",
s1p:"Le générateur de formes d'onde (waveforms) est un outil numérique optimisé pour transformer le signal sonore de fichiers MP3 et MP4 en représentations visuelles précises et personnalisables. En traitant l'audio directement depuis la mémoire RAM de l'appareil grâce à des technologies web avancées telles que Web Audio API et Canvas, l'application supprime la nécessité de téléverser des fichiers vers des serveurs externes. Cette approche garantit une vitesse de rendu quasiment instantanée, permettant aux monteurs vidéo, podcasteurs et créateurs de contenu d'obtenir des images ou des vecteurs d'ondes sonores prêts pour leurs projets visuels.",
s2t:"Confidentialité et Performances du Traitement Local",
s2p:"Contrairement aux convertisseurs en ligne traditionnels qui imposent de transférer des données lourdes vers le cloud, le traitement local dans le navigateur (<em>client-side</em>) privilégie la sécurité des informations et l'efficacité énergétique. Les fichiers multimédias ne quittent jamais l'ordinateur de l'utilisateur, ce qui garantit une confidentialité absolue des actifs numériques et élimine tout risque de fuite. De plus, comme l'outil ne dépend pas de la bande passante montante, vous pouvez générer des designs de circular waves et de formes d'onde à partir de pistes longues ou de vidéos MP4 de plusieurs gigaoctets sans interruption ni temps d'attente.",
s3t:"Formats Pris en Charge et Flexibilité Typologique",
s3p:"L'outil prend en charge une large gamme de conteneurs et de codecs audio et vidéo, au premier rang desquels les formats universels MP3 et MP4. Lors de la lecture du fichier, le système décode le canal audio pour extraire les données d'amplitude et de fréquence avec une précision millimétrée. Cette flexibilité permet d'extraire l'empreinte sonore de voix, de bandes originales, d'effets sonores ou d'extraits vidéo sans conversion préalable, s'adaptant aux exigences techniques de tout flux de travail de design multimédia ou de production audiovisuelle.",
s4t:"Personnalisation et Export Multiformat",
s4p:"Une fois la structure visuelle de l'onde générée, le système offre des options complètes de personnalisation pour s'adapter à l'identité graphique de chaque projet. Les utilisateurs peuvent régler les couleurs, l'épaisseur des barres, la densité d'échantillonnage, les fonds transparents et divers styles graphiques, en mettant en avant la création d'impressionnantes circular waves pour un rendu innovant. À la fin de l'édition, le résultat peut être exporté dans des formats haute résolution tels que PNG pour un usage direct dans les monteurs vidéo, ou en vecteurs SVG pour un redimensionnement sans perte de qualité en design et en imprimerie.",
s5t:"Cas d'Usage pour Créateurs et Designers",
s5p:"La visualisation d'ondes sonores et l'utilisation des circular waves sont devenues des ressources fondamentales pour la création de contenu moderne, des <em>audiogrammes</em> promotionnels pour les réseaux sociaux comme YouTube Shorts, Instagram ou TikTok jusqu'aux éléments décoratifs de pochettes d'albums et de sites web. Cette solution accessible et légère simplifie le travail des designers, ingénieurs du son et créateurs indépendants, leur permettant de générer des ressources graphiques professionnelles à fort impact visuel sans installer de logiciels lourds.",
faqTitle:"Questions Fréquentes (FAQ)",
q1:"Est-il sûr de traiter mes fichiers MP3 et MP4 sur ce générateur de waveforms ?",
a1:"Oui, c'est 100% sûr. Le traitement s'effectue localement dans votre navigateur (<em>client-side</em>). Vos fichiers ne sont téléversés sur aucun serveur ni stockés dans le cloud.",
q2:"Puis-je créer des graphiques en circular waves à partir d'une vidéo MP4 ?",
a2:"Oui. L'outil extrait automatiquement la piste audio intégrée au conteneur MP4 pour rendre le motif de circular waves ou d'autres styles, sans conversion préalable en MP3.",
q3:"Existe-t-il une limite à la taille des fichiers ?",
a3:"Aucune limite de plateforme. La capacité dépend exclusivement de la mémoire RAM de votre appareil pour décoder le fichier dans le navigateur.",
q4:"Dans quels formats puis-je exporter les circular waves et waveforms générées ?",
a4:"Vous pouvez exporter vos designs en PNG avec fond transparent ou en vecteur SVG, parfait pour les logiciels professionnels de design graphique.",
q5:"Ai-je besoin d'une connexion Internet pour utiliser l'outil ?",
a5:"Vous n'avez besoin d'une connexion que pour charger la page la première fois. Une fois chargée, l'application fonctionne hors ligne sans interruption.",
footerText:"© 2026 PulseWaveLab · Traitement 100% local dans votre navigateur · Sans inscription · Sans téléversement"
}
};

let currentLang=localStorage.getItem('app-lang')||'es';
if(!localStorage.getItem('app-lang')){const b=(navigator.language||'es').slice(0,2);if(I18N[b])currentLang=b;}
function t(k,...a){const e=I18N[currentLang][k]??I18N.es[k]??k;return typeof e==='function'?e(...a):e;}
const uiState={statusKey:'readyStatus',statusArgs:[],playing:false};

// ================== REFERENCIAS ==================
const $=id=>document.getElementById(id);
const canvas=$('canvas-view'),ctx2d=canvas.getContext('2d',{alpha:false});
const barsCtrl=$('param-bars'),capCtrl=$('param-cap'),radiusCtrl=$('param-radius');
const heightCtrl=$('param-height'),thicknessCtrl=$('param-thickness');
const rangeCtrl=$('param-range'),valRange=$('val-range');
const sensCtrl=$('param-sens'),valSens=$('val-sens');
const waveColorCtrl=$('param-wave-color'),bgColorCtrl=$('param-bg-color');
const chkTransparent=$('chk-transparent'),valBars=$('val-bars'),statusText=$('status-text');
const progressEl=$('export-progress'),btnPlay=$('btn-play'),btnRecord=$('btn-record');
const btnPng=$('btn-png'),btnSvg=$('btn-svg'),fileInput=$('audio-inputs');
const workersInfo=$('workers-info'),langSelect=$('lang-select');
const sizePreset=$('size-preset'),sizeCustomRow=$('size-custom-row'),sizeWidth=$('size-width'),sizeHeight=$('size-height');
const BINS=256,AMP_K=0.9,REF_SIZE=600;
const NUM_WORKERS=Math.max(2,Math.min(navigator.hardwareConcurrency||4,8));

// Config viva en memoria
const cfg={numBars:64,radius:100,hm:1.5,thickness:4,wave:'#00e676',bg:'#000000',cap:'round',sensRange:60,toneSens:1,outW:1080,outH:1080,scale:1};
function syncCfg(){
 cfg.numBars=parseInt(barsCtrl.value,10);valBars.textContent=barsCtrl.value;
 cfg.radius=parseInt(radiusCtrl.value,10);cfg.hm=parseFloat(heightCtrl.value);
 cfg.thickness=parseInt(thicknessCtrl.value,10);
 cfg.sensRange=parseInt(rangeCtrl.value,10);valRange.textContent=rangeCtrl.value;
 cfg.toneSens=parseInt(sensCtrl.value,10)/100;valSens.textContent=sensCtrl.value+'%';
 cfg.wave=waveColorCtrl.value;cfg.bg=bgColorCtrl.value;cfg.cap=capCtrl.value;
 syncSize();
}
function syncSize(){
 if(sizePreset.value==='custom'){
  let w=parseInt(sizeWidth.value,10),h=parseInt(sizeHeight.value,10);
  if(!w||w<64)w=64;if(!h||h<64)h=64;
  if(w>3840)w=3840;if(h>3840)h=3840;
  cfg.outW=w;cfg.outH=h;
 }else{
  const p=sizePreset.value.split('x');
  cfg.outW=parseInt(p[0],10);cfg.outH=parseInt(p[1],10);
 }
 cfg.scale=Math.max(cfg.outW,cfg.outH)/REF_SIZE;
 sizeCustomRow.hidden=sizePreset.value!=='custom';
}

// Devuelve el codec AVC con el level mínimo suficiente para la resolución.
function getAvcCodec(width,height){
 const cw=Math.ceil(width/16)*16,ch=Math.ceil(height/16)*16;
 const mb=Math.ceil(cw*ch/256);
 const levels=[
  {code:'1F',maxMB:3600},   // 3.1
  {code:'28',maxMB:8192},   // 4.0
  {code:'29',maxMB:8192},   // 4.1
  {code:'2A',maxMB:8704},   // 4.2
  {code:'32',maxMB:22080},  // 5.0
  {code:'33',maxMB:36864},  // 5.1
  {code:'34',maxMB:36864},  // 5.2
  {code:'3C',maxMB:139264}  // 6.0
 ];
 for(const l of levels){if(mb<=l.maxMB)return 'avc1.4D40'+l.code;}
 return 'avc1.4D403C';
}

// Tabla trigonométrica cacheada por número de barras
const trigCache=new Map();
function getTrig(n){
 let tb=trigCache.get(n);
 if(!tb){
  tb=new Float32Array(n*2);
  for(let i=0;i<n;i++){const a=i*((Math.PI*2)/n);tb[i*2]=Math.cos(a);tb[i*2+1]=Math.sin(a);}
  trigCache.set(n,tb);
 }
 return tb;
}

// Mapeo de barra i al índice de bin FFT según sensibilidad de tonos.
// toneSens: 1.0 → últimas barras en tonos medios; 1.5 → tonos bajos.
function mapBin(i,n,toneSens){
 const maxBin=Math.max(16,Math.min(BINS-1,Math.round(214-86*toneSens)));
 return Math.min(BINS-1,(i*maxBin/n)|0);
}

// ================== FFT COMPARTIDA (preview y export usan el MISMO cálculo) ==================
const FFT_SIZE=512,HALF_FFT=256;
const fftTwR=new Float32Array(FFT_SIZE/2),fftTwI=new Float32Array(FFT_SIZE/2);
for(let i=0;i<FFT_SIZE/2;i++){fftTwR[i]=Math.cos(-2*Math.PI*i/FFT_SIZE);fftTwI[i]=Math.sin(-2*Math.PI*i/FFT_SIZE);}
const fftHann=new Float32Array(FFT_SIZE);
for(let i=0;i<FFT_SIZE;i++)fftHann[i]=0.5*(1-Math.cos(2*Math.PI*i/(FFT_SIZE-1)));
const fftRe=new Float32Array(FFT_SIZE),fftIm=new Float32Array(FFT_SIZE);
const fftMag=new Float32Array(HALF_FFT),smoothBuf=new Float32Array(HALF_FFT);
let peakSm=1;
function bitRev(x,b){let r=0;for(let i=0;i<b;i++){r=(r<<1)|(x&1);x>>=1;}return r;}
function fastFFTShared(re,im){
 const n=re.length,bits=Math.log2(n);
 for(let i=0;i<n;i++){const j=bitRev(i,bits);if(j>i){const a=re[i],b=im[i];re[i]=re[j];im[i]=im[j];re[j]=a;im[j]=b;}}
 for(let size=2;size<=n;size*=2){
  const hh=size>>1,str=n/size;
  for(let i=0;i<n;i+=size){
   for(let j=i,tt=0;j<i+hh;j++,tt+=str){
    const k=j+hh,wR=fftTwR[tt],wI=fftTwI[tt];
    const tr=wR*re[k]-wI*im[k],ti=wR*im[k]+wI*re[k];
    re[k]=re[j]-tr;im[k]=im[j]-ti;re[j]+=tr;im[j]+=ti;
   }
  }
 }
}
// Normaliza el espectro por su pico suavizado: la barra más fuerte tiende a 255.
function computeSpectrum(left,startSample,smooth){
 fftRe.fill(0);fftIm.fill(0);
 const end=Math.min(startSample+FFT_SIZE,left.length);
 for(let i=startSample;i<end;i++)fftRe[i-startSample]=left[i]*fftHann[i-startSample];
 fastFFTShared(fftRe,fftIm);
 let peak=0;
 for(let i=0;i<HALF_FFT;i++){
  const mag=Math.sqrt(fftRe[i]*fftRe[i]+fftIm[i]*fftIm[i]);
  fftMag[i]=mag;
  if(mag>peak)peak=mag;
 }
 if(peak<1)peak=1;
 peakSm=peakSm*0.8+peak*0.2;
 if(peakSm<1)peakSm=1;
 const range=Math.max(1,cfg.sensRange);
 for(let i=0;i<HALF_FFT;i++){
  const db=20*Math.log10(fftMag[i]/peakSm+0.000001);
  const raw=Math.max(0,Math.min(255,255*(db+range)/range));
  smoothBuf[i]=raw+smooth*(smoothBuf[i]-raw);
 }
 return smoothBuf;
}

// Dibujo unificado: preview, PNG y export usan la MISMA escala y mapeo de bins
function renderBars(g,w,h,data,paintBg){
 if(paintBg){g.fillStyle=cfg.bg;g.fillRect(0,0,w,h);}
 const scale=Math.max(w,h)/REF_SIZE;
 const cx=w/2,cy=h/2,n=cfg.numBars,tb=getTrig(n);
 const r=cfg.radius*scale,lw=cfg.thickness*scale;
 g.lineWidth=lw;g.strokeStyle=cfg.wave;g.lineCap=cfg.cap;
 g.beginPath();
 for(let i=0;i<n;i++){
  const byte=data?data[mapBin(i,n,cfg.toneSens)]:null;
  const amp=(byte==null)?15:byte*AMP_K*cfg.hm*scale;
  g.moveTo(cx+tb[i*2]*r,cy+tb[i*2+1]*r);
  g.lineTo(cx+tb[i*2]*(r+amp),cy+tb[i*2+1]*(r+amp));
 }
 g.stroke();
}
let lastData=null;
function syncPreviewCanvas(){
 const ar=cfg.outH/cfg.outW;
 let pw=600,ph=600;
 if(cfg.outW>=cfg.outH){ph=Math.round(600*ar);}else{pw=Math.round(600/ar);}
 canvas.width=pw;canvas.height=ph;
}
function drawFrame(data){renderBars(ctx2d,canvas.width,canvas.height,data,true);}

// ================== MOTOR i18n · APLICACIÓN ==================
function setStatus(k,...a){uiState.statusKey=k;uiState.statusArgs=a;statusText.textContent=t(k,...a);}
function applyLang(lang){
 currentLang=lang;
 localStorage.setItem('app-lang',lang);
 document.documentElement.lang=lang;
 document.title=t('_title');
 const md=document.querySelector('meta[name="description"]');
 if(md)md.content=t('_desc');
 document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.dataset.i18n);});
 document.querySelectorAll('[data-i18n-html]').forEach(el=>{el.innerHTML=t(el.dataset.i18nHtml);});
 const ps=document.querySelector('[data-dynamic="play"]');
 if(ps)ps.textContent=t(uiState.playing?'stopPreviewBtn':'previewBtn');
 statusText.textContent=t(uiState.statusKey,...uiState.statusArgs);
 workersInfo.textContent=t('workersInfo',NUM_WORKERS);
 langSelect.value=lang;
}

// ================== EVENTOS ==================
langSelect.addEventListener('change',()=>applyLang(langSelect.value));
[barsCtrl,radiusCtrl,heightCtrl,thicknessCtrl,waveColorCtrl,bgColorCtrl,capCtrl,rangeCtrl,sensCtrl].forEach(el=>{
 el.addEventListener('input',()=>{syncCfg();if(!uiState.playing)drawFrame(null);});
});
sizePreset.addEventListener('change',()=>{syncSize();syncPreviewCanvas();if(!uiState.playing)drawFrame(null);});
sizeWidth.addEventListener('input',()=>{syncSize();syncPreviewCanvas();if(!uiState.playing)drawFrame(null);});
sizeHeight.addEventListener('input',()=>{syncSize();syncPreviewCanvas();if(!uiState.playing)drawFrame(null);});
let mainAudios=[];
const urlCache=new Map();
function handleFiles(list){
 urlCache.forEach(u=>URL.revokeObjectURL(u));
 urlCache.clear();
 mainAudios=Array.from(list);
 previewBuffer=null;previewLeft=null;
 setStatus('audiosSelected',mainAudios.length);
}
fileInput.addEventListener('change',e=>handleFiles(e.target.files));
['dragover','drop'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault()));
document.addEventListener('dragenter',()=>document.body.classList.add('dropping'));
document.addEventListener('dragleave',e=>{if(!e.relatedTarget)document.body.classList.remove('dropping');});
document.addEventListener('drop',e=>{
 document.body.classList.remove('dropping');
 const fs=Array.from(e.dataTransfer.files).filter(f=>/^audio\//.test(f.type)||/^video\//.test(f.type)||/\.(mp3|wav|ogg|m4a|flac|mp4)$/i.test(f.name));
 if(!fs.length)return;
 try{
  const dt=new DataTransfer();
  fs.forEach(f=>dt.items.add(f));
  fileInput.files=dt.files;
 }catch(_){}
 handleFiles(fs);
});

// ================== PREVIEW ==================
let currentAudioEl=null,animationId=0;
let previewBuffer=null,previewLeft=null,previewSampleRate=48000;
function getUrl(f){
 let u=urlCache.get(f);
 if(!u){u=URL.createObjectURL(f);urlCache.set(f,u);}
 return u;
}
function stopPreview(){
 if(!uiState.playing)return;
 cancelAnimationFrame(animationId);
 if(currentAudioEl){currentAudioEl.pause();currentAudioEl.src='';currentAudioEl=null;}
 uiState.playing=false;
 lastData=null;
 drawFrame(null);
 const ps=document.querySelector('[data-dynamic="play"]');
 if(ps)ps.textContent=t('previewBtn');
 setStatus('previewStopped');
}
btnPlay.addEventListener('click',async()=>{
 if(uiState.playing)return stopPreview();
 if(!mainAudios.length)return alert(t('needAudioPreview'));
 try{
  if(!previewBuffer){
   const buf=await mainAudios[0].arrayBuffer();
   const ac=new(window.AudioContext||window.webkitAudioContext)();
   previewBuffer=await ac.decodeAudioData(buf);
   await ac.close();
   previewLeft=previewBuffer.getChannelData(0);
   previewSampleRate=previewBuffer.sampleRate;
  }
  currentAudioEl=new Audio(getUrl(mainAudios[0]));
  currentAudioEl.addEventListener('ended',stopPreview);
  await currentAudioEl.play();
  uiState.playing=true;
  document.querySelector('[data-dynamic="play"]').textContent=t('stopPreviewBtn');
  setStatus('listeningPreview');
  (function loop(){
   if(!uiState.playing)return;
   animationId=requestAnimationFrame(loop);
   const sample=Math.floor(currentAudioEl.currentTime*previewSampleRate);
   lastData=computeSpectrum(previewLeft,sample,0.8);
   drawFrame(lastData);
  })();
 }catch(err){
  setStatus('errorMsg',err.message);
 }
});

// ================== DESCARGA PNG / SVG ==================
function download(blob,name){
 const u=URL.createObjectURL(blob),a=document.createElement('a');
 a.href=u;a.download=name;a.click();
 setTimeout(()=>URL.revokeObjectURL(u),4000);
}
btnPng.addEventListener('click',()=>{
 const c=document.createElement('canvas');
 c.width=cfg.outW;c.height=cfg.outH;
 renderBars(c.getContext('2d'),cfg.outW,cfg.outH,lastData,!chkTransparent.checked);
 c.toBlob(b=>{download(b,'waveform.png');setStatus('imgDone');},'image/png');
});
btnSvg.addEventListener('click',()=>{
 const w=cfg.outW,h=cfg.outH,scale=Math.max(w,h)/REF_SIZE;
 const n=cfg.numBars,tb=getTrig(n);
 const cx=w/2,cy=h/2,r=cfg.radius*scale,lw=cfg.thickness*scale;
 let lines='';
 for(let i=0;i<n;i++){
  const byte=lastData?lastData[mapBin(i,n,cfg.toneSens)]:null;
  const amp=(byte==null)?15:byte*AMP_K*cfg.hm*scale;
  const x1=(cx+tb[i*2]*r).toFixed(2),y1=(cy+tb[i*2+1]*r).toFixed(2);
  const x2=(cx+tb[i*2]*(r+amp)).toFixed(2),y2=(cy+tb[i*2+1]*(r+amp)).toFixed(2);
  lines+='<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'"/>';
 }
 const bg=chkTransparent.checked?'':'<rect width="'+w+'" height="'+h+'" fill="'+cfg.bg+'"/>';
 const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'">'+bg+'<g stroke="'+cfg.wave+'" stroke-width="'+lw+'" stroke-linecap="'+cfg.cap+'">'+lines+'</g></svg>';
 download(new Blob([svg],{type:'image/svg+xml'}),'waveform.svg');
 setStatus('imgDone');
});

// ================== WORKER (FFT + dibujo + codificación H.264 por segmento) ==================
const workerCode=
"try{importScripts('https://cdn.jsdelivr.net/npm/mp4-muxer@5.2.2/build/mp4-muxer.min.js');}catch(e){self.postMessage({type:'ERROR',message:'mp4-muxer load failed'});throw e;}"+
"let twR=null,twI=null;"+
"function initTw(n){twR=new Float32Array(n/2);twI=new Float32Array(n/2);for(let i=0;i<n/2;i++){twR[i]=Math.cos(-2*Math.PI*i/n);twI[i]=Math.sin(-2*Math.PI*i/n);}}"+
"function bitRev(x,b){let r=0;for(let i=0;i<b;i++){r=(r<<1)|(x&1);x>>=1;}return r;}"+
"function fastFFT(re,im){const n=re.length,bits=Math.log2(n);for(let i=0;i<n;i++){const j=bitRev(i,bits);if(j>i){let a=re[i],b=im[i];re[i]=re[j];im[i]=im[j];re[j]=a;im[j]=b;}}for(let size=2;size<=n;size*=2){const hh=size>>1,str=n/size;for(let i=0;i<n;i+=size){for(let j=i,tt=0;j<i+hh;j++,tt+=str){const k=j+hh,wR=twR[tt],wI=twI[tt];const tr=wR*re[k]-wI*im[k],ti=wR*im[k]+wI*re[k];re[k]=re[j]-tr;im[k]=im[j]-ti;re[j]+=tr;im[j]+=ti;}}}}"+
"self.onmessage=async function(e){"+
"if(e.data.type!=='ENCODE_SEGMENT')return;"+
"try{"+
"const segIndex=e.data.segIndex,left=e.data.leftChannel,startFrame=e.data.startFrame,sampleRate=e.data.sampleRate,config=e.data.config;"+
"const fps=config.fps,spf=Math.floor(sampleRate/fps),totalFrames=Math.floor(left.length/spf);"+
"const off=new OffscreenCanvas(config.width,config.height),c=off.getContext('2d');"+
"const ve=new VideoEncoder({output:function(chunk,meta){const buf=new ArrayBuffer(chunk.byteLength);chunk.copyTo(buf);self.postMessage({type:'VIDEO_CHUNK',segIndex:segIndex,data:{type:chunk.type,timestamp:chunk.timestamp,duration:chunk.duration,buf:buf},meta:meta},[buf]);},error:function(err){self.postMessage({type:'ERROR',message:'VideoEncoder: '+err.message});}});"+
"ve.configure({codec:config.avcCodec,width:config.width,height:config.height,bitrate:2500000,framerate:fps,latencyMode:'quality',hardwareAcceleration:'prefer-hardware'});"+
"const fftSize=512,BINS=256,halfFft=256,AMP_K=0.9,SM=0.8,durUs=1000000/fps,tsOff=startFrame*durUs,REF_SIZE=600;"+
"const re=new Float32Array(fftSize),im=new Float32Array(fftSize),magA=new Float32Array(halfFft),freq=new Uint8Array(halfFft),sm=new Float32Array(halfFft),hann=new Float32Array(fftSize);"+
"for(let i=0;i<fftSize;i++)hann[i]=0.5*(1-Math.cos(2*Math.PI*i/(fftSize-1)));"+
"initTw(fftSize);"+
"const nb=config.numBars,cosT=new Float32Array(nb),sinT=new Float32Array(nb);"+
"for(let i=0;i<nb;i++){const a=i*(2*Math.PI/nb);cosT[i]=Math.cos(a);sinT[i]=Math.sin(a);}"+
"const maxBin=Math.max(16,Math.min(BINS-1,Math.round(214-86*config.toneSens)));"+
"const scale=Math.max(config.width,config.height)/REF_SIZE,radius=config.radius*scale,lw=config.thickness*scale;"+
"const range=Math.max(1,config.sensRange);let peakSm=1;"+
"for(let f=0;f<totalFrames;f++){"+
"const s=f*spf;re.fill(0);im.fill(0);"+
"const end=Math.min(s+fftSize,left.length);"+
"for(let i=s;i<end;i++)re[i-s]=left[i]*hann[i-s];"+
"fastFFT(re,im);"+
"let peak=0;for(let i=0;i<halfFft;i++){const m=Math.sqrt(re[i]*re[i]+im[i]*im[i]);magA[i]=m;if(m>peak)peak=m;}"+
"if(peak<1)peak=1;peakSm=peakSm*0.8+peak*0.2;if(peakSm<1)peakSm=1;"+
"for(let i=0;i<halfFft;i++){const db=20*Math.log10(magA[i]/peakSm+0.000001);const raw=Math.max(0,Math.min(255,255*(db+range)/range));sm[i]=raw+SM*(sm[i]-raw);freq[i]=sm[i]|0;}"+
"c.fillStyle=config.bgColor;c.fillRect(0,0,config.width,config.height);"+
"const cx=config.width/2,cy=config.height/2;"+
"c.lineWidth=lw;c.strokeStyle=config.waveColor;c.lineCap=config.cap;c.beginPath();"+
"for(let i=0;i<nb;i++){const idx=Math.min(BINS-1,(i*maxBin/nb)|0);const amp=freq[idx]*AMP_K*config.heightMultiplier*scale;const ro=radius+amp;c.moveTo(cx+cosT[i]*radius,cy+sinT[i]*radius);c.lineTo(cx+cosT[i]*ro,cy+sinT[i]*ro);}"+
"c.stroke();"+
"const vf=new VideoFrame(off,{timestamp:tsOff+f*durUs,duration:durUs});"+
"ve.encode(vf);vf.close();"+
"while(ve.encodeQueueSize>8){await new Promise(function(r){setTimeout(r,2);});}"+
"if(f%30===0)self.postMessage({type:'PROGRESS',segIndex:segIndex,percent:f/totalFrames});"+
"}"+
"await ve.flush();ve.close();"+
"self.postMessage({type:'SEGMENT_DONE',segIndex:segIndex});"+
"}catch(err){self.postMessage({type:'ERROR',message:err.toString()});}"+
"};";
const workerURL=URL.createObjectURL(new Blob([workerCode],{type:'application/javascript'}));

// ================== WORKER DE AUDIO (AAC) ==================
const audioWorkerCode=
"self.onmessage=async function(e){"+
"if(e.data.type!=='ENCODE_AUDIO')return;"+
"try{"+
"const sampleRate=e.data.sampleRate,channels=e.data.channels,left=e.data.left,right=e.data.right;"+
"const totalFrames=left.length,chunkFrames=1024;"+
"const planar=new Float32Array(chunkFrames*channels);"+
"const enc=new AudioEncoder({output:function(chunk,meta){const buf=new ArrayBuffer(chunk.byteLength);chunk.copyTo(buf);self.postMessage({type:'AUDIO_CHUNK',data:{type:chunk.type,timestamp:chunk.timestamp,duration:chunk.duration,buf:buf},meta:meta},[buf]);},error:function(err){self.postMessage({type:'ERROR',message:'AudioEncoder: '+err.message});}});"+
"enc.configure({codec:'mp4a.40.2',sampleRate:sampleRate,numberOfChannels:channels,bitrate:192000});"+
"for(let frameStart=0;frameStart<totalFrames;frameStart+=chunkFrames){"+
"const n=Math.min(chunkFrames,totalFrames-frameStart);planar.fill(0);"+
"planar.set(left.subarray(frameStart,frameStart+n),0);"+
"if(channels>1)planar.set(right.subarray(frameStart,frameStart+n),chunkFrames);"+
"const ad=new AudioData({format:'f32-planar',sampleRate:sampleRate,numberOfFrames:n,numberOfChannels:channels,timestamp:Math.round((frameStart/sampleRate)*1e6),data:planar.slice(0,n*channels)});"+
"enc.encode(ad);ad.close();"+
"while(enc.encodeQueueSize>2){await new Promise(function(r){setTimeout(r,1);});}"+
"if(frameStart%50000===0)self.postMessage({type:'AUDIO_PROGRESS',percent:frameStart/totalFrames});"+
"}"+
"await enc.flush();enc.close();"+
"self.postMessage({type:'AUDIO_DONE'});"+
"}catch(err){self.postMessage({type:'ERROR',message:err.toString()});}"+
"};";
const audioWorkerURL=URL.createObjectURL(new Blob([audioWorkerCode],{type:'application/javascript'}));

// ================== EXPORTACIÓN MP4 PARALELA ==================
let exportWorkers=[],audioWorkerRef=null;
function failExport(msg){
 exportWorkers.forEach(w=>w.terminate());
 exportWorkers=[];
 if(audioWorkerRef){audioWorkerRef.terminate();audioWorkerRef=null;}
 progressEl.style.display='none';
 btnRecord.disabled=false;btnPlay.disabled=false;
 setStatus('errorMsg',msg);
}
function updateProgress(nSeg,segProgress){
 let avg=0;
 for(let i=0;i<nSeg;i++)avg+=segProgress[i];
 progressEl.value=(avg/nSeg)*100;
}
async function assembleFinal(segChunks,audioChunks,audioMeta){
 exportWorkers.forEach(w=>w.terminate());
 exportWorkers=[];
 progressEl.style.display='none';
 try{
  const all=segChunks.flat();
  const muxer=new Mp4Muxer.Muxer({
   target:new Mp4Muxer.ArrayBufferTarget(),
   video:{codec:'avc',width:cfg.outW,height:cfg.outH},
   audio:{codec:'aac',sampleRate:audioMeta.sampleRate,numberOfChannels:audioMeta.channels},
   fastStart:'in-memory'
  });
  let vMetaSent=false,aMetaSent=false;
  for(const d of all){
   const chunk=new EncodedVideoChunk({
    type:d.data.type,
    timestamp:d.data.timestamp,
    duration:d.data.duration,
    data:d.data.buf
   });
   muxer.addVideoChunk(chunk,(!vMetaSent&&d.meta)?d.meta:undefined);
   vMetaSent=true;
  }
  for(const a of audioChunks){
   const chunk=new EncodedAudioChunk({
    type:a.data.type,
    timestamp:a.data.timestamp,
    duration:a.data.duration,
    data:a.data.buf
   });
   muxer.addAudioChunk(chunk,(!aMetaSent&&a.meta)?a.meta:undefined);
   aMetaSent=true;
  }
  muxer.finalize();
  download(new Blob([muxer.target.buffer],{type:'video/mp4'}),'waveform-video.mp4');
  setStatus('doneMsg');
 }catch(err){setStatus('errorMsg',err.message);}
 btnRecord.disabled=false;btnPlay.disabled=false;
}
btnRecord.addEventListener('click',async()=>{
 if(!window.VideoEncoder||!window.OffscreenCanvas)return alert(t('noWebCodecs'));
 if(!mainAudios.length)return alert(t('needAudios'));
 if(uiState.playing)stopPreview();
 btnRecord.disabled=true;btnPlay.disabled=true;
 progressEl.style.display='block';progressEl.value=0;
 let recCtx=null;
 try{
  if(typeof Mp4Muxer==='undefined')throw new Error('mp4-muxer not loaded');
  setStatus('decoding');
  recCtx=new(window.AudioContext||window.webkitAudioContext)();
  const arrayBufs=await Promise.all(mainAudios.map(f=>f.arrayBuffer()));
  const audioBuffers=await Promise.all(arrayBufs.map(b=>recCtx.decodeAudioData(b)));
  await recCtx.close();
  const totalDuration=audioBuffers.reduce((a,b)=>a+b.duration,0);
  const sampleRate=audioBuffers[0].sampleRate;
  const offline=new OfflineAudioContext(2,Math.ceil(sampleRate*totalDuration),sampleRate);
  let off=0;
  audioBuffers.forEach(buf=>{
   const src=offline.createBufferSource();
   src.buffer=buf;src.connect(offline.destination);
   src.start(off);off+=buf.duration;
  });
  const master=await offline.startRendering();
  const left=master.getChannelData(0);
  const right=master.numberOfChannels>1?master.getChannelData(1):null;
  const FPS=30,spf=Math.floor(sampleRate/FPS);
  const totalFrames=Math.floor(left.length/spf);
  if(totalFrames<1)throw new Error(t('shortAudio'));
  const numSegments=Math.min(NUM_WORKERS,totalFrames);
  const framesPerSeg=Math.floor(totalFrames/numSegments);
  setStatus('rendering');
  const segChunks=Array.from({length:numSegments},()=>[]);
  const segProgress=new Float32Array(numSegments);
  let finishedSegs=0;
  const audioMeta={sampleRate,channels:master.numberOfChannels};
  const audioChunks=[];
  const audioWorker=new Worker(audioWorkerURL);
  audioWorkerRef=audioWorker;
  const config={width:cfg.outW,height:cfg.outH,numBars:cfg.numBars,radius:cfg.radius,heightMultiplier:cfg.hm,thickness:cfg.thickness,waveColor:cfg.wave,bgColor:cfg.bg,cap:cfg.cap,fps:FPS,sensRange:cfg.sensRange,toneSens:cfg.toneSens,avcCodec:getAvcCodec(cfg.outW,cfg.outH)};
  let audioDone=false,videoDone=false;
  function maybeAssemble(){
   if(audioDone&&videoDone)assembleFinal(segChunks,audioChunks,audioMeta);
  }
  audioWorker.onmessage=e=>{
   const d=e.data;
   if(d.type==='AUDIO_CHUNK')audioChunks.push(d);
   else if(d.type==='AUDIO_DONE'){audioDone=true;audioWorkerRef=null;audioWorker.terminate();maybeAssemble();}
   else if(d.type==='ERROR')failExport(d.message);
  };
  audioWorker.onerror=err=>failExport(err.message);
  const leftCopy=left.slice(0);
  const rightCopy=right?right.slice(0):null;
  audioWorker.postMessage({type:'ENCODE_AUDIO',sampleRate,channels:master.numberOfChannels,left:leftCopy,right:rightCopy},rightCopy?[leftCopy.buffer,rightCopy.buffer]:[leftCopy.buffer]);
  const onMsg=e=>{
   const d=e.data;
   if(d.type==='VIDEO_CHUNK')segChunks[d.segIndex].push(d);
   else if(d.type==='PROGRESS'){segProgress[d.segIndex]=d.percent;updateProgress(numSegments,segProgress);}
   else if(d.type==='SEGMENT_DONE'){finishedSegs++;if(finishedSegs===numSegments){videoDone=true;maybeAssemble();}}
   else if(d.type==='ERROR')failExport(d.message);
  };
  for(let s=0;s<numSegments;s++){
   const startF=s*framesPerSeg,endF=(s===numSegments-1)?totalFrames:startF+framesPerSeg;
   const slice=left.slice(startF*spf,endF*spf);
   const w=new Worker(workerURL);
   w.onmessage=onMsg;
   w.onerror=err=>failExport(err.message);
   exportWorkers.push(w);
   w.postMessage({type:'ENCODE_SEGMENT',segIndex:s,leftChannel:slice,startFrame:startF,sampleRate:sampleRate,config:config},[slice.buffer]);
  }
 }catch(error){
  if(recCtx&&recCtx.state!=='closed')recCtx.close();
  failExport(error.message);
 }
});

// ================== INICIALIZACIÓN ==================
applyLang(currentLang);
syncCfg();
syncPreviewCanvas();
drawFrame(null);
