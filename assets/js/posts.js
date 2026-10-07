/*
  Blog posts, mirrored from LinkedIn (https://www.linkedin.com/in/trungdong28/recent-activity/all/).

  To add a post: copy one block, give it a unique `id`, paste the LinkedIn text into `body`
  (a template literal, so line breaks are kept), and set `url` to the post's permalink
  (… menu → "Copy link to post"). Optional: `image` or `images` (paths relative to the site root),
  `summary` (one line for the News list on the home page), `via` (for reposts).
  Posts are sorted by date automatically, newest first.
*/
window.POSTS = [
  {
    id: 'diver3d-challenge-live',
    date: '2026-10-04',
    title: 'Diver3D: the first 3D sonar diver detection challenge is live',
    summary: 'Diver3D — the first 3D sonar diver detection challenge — is live at MaCVi @ WACV 2027.',
    tags: ['Challenge', 'MaCVi @ WACV 2027'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7512576115450937344/',
    body: `Excited to share a challenge I've been organizing: Diver3D, the first 3D sonar diver detection challenge, now live as part of MaCVi @ WACV 2027 (the 5th Workshop on Maritime Computer Vision), coming to Orlando this January! 🌊

Underwater, cameras are the first sensor to fail, and 2D sonar throws away the elevation you need to recover how a diver is oriented. Diver3D asks: can you detect divers as full 9-DoF oriented boxes (position, size, and complete 3D rotation) from sparse 3D sonar point clouds?

🏆 Challenges (final submissions Oct 27, provisional)
🐟 Diver3D: The first ever 3D sonar diver detection → https://lnkd.in/eWtW2BvD
📄 Dataset: uScenes: A Multimodal RGB and 3D Sonar Dataset for Underwater Robot Perception → https://lnkd.in/e3TZ2-zK
🧠 Baseline: SonarVoxNet: Diver Detection in 3D Bounding Box using 3D Sonar → https://lnkd.in/e9n5wwwJ

📝 Papers: underwater vision, surface navigation, aerial/remote sensing, multimodal perception, datasets, and embedded CV. Submit by Oct 16 (AoE) → https://lnkd.in/gi4Bg7i7
💬 Questions? Join us on Discord → https://macvi.org/discord
🔎 Overview → https://lnkd.in/gWm7qTze

A special thanks to Xiaomin Lin and Jaejeong (Jane) Shin for their guidance and support in making Diver3D happen.

Grateful to work alongside the MaCVi 2027 organizing team: Benjamin Kiefer, Uma Mudenagudi, Chen Chen, Chaitra Desai, Sneha Varur, Yi Sheng, Ramesh Ashok Tabib, Sujatha C, Dr. Tusar Kanti Mishra, Jan Lukas Augustin, Nikhil Akalwadi, Sampada Malagi, Arnold Wiliem, Matej Kristan, Janez Pers, Mingi Jeong, Alberto Q., Matija Teršek

Many thanks to Eugene Park, Seyoung Kan, and Jiwon Lee for their tireless efforts in data labeling.

Please share with anyone working in maritime, underwater, or embedded vision! 🚢

#MaCVi #WACV2027 #UnderwaterRobotics #Sonar #3DDetection #ComputerVision`
  },
  {
    id: 'first-iros',
    date: '2026-10-02',
    title: 'My first IROS',
    summary: 'Presented PFS (main conference) and AquaBEV-Nav (WPNMR workshop poster) at IROS 2026 in Pittsburgh.',
    tags: ['Conference', 'IROS 2026'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7511886243077529600/',
    images: ['assets/img/blog/iros2026-1.jpg', 'assets/img/blog/iros2026-3.jpg', 'assets/img/blog/iros2026-4.jpg', 'assets/img/blog/iros2026-2.jpg'],
    body: `My first time presenting at a major robotics conference, and I'm still taking it all in. 🤖🌊
Last week at #IROS2026 in Pittsburgh, I got to share two projects:

📄 Main conference paper: Post Fusion Bird's Eye View Feature Stabilization for Robust Multimodal 3D Detection
with Dev Thakkar, Prof. Arman Sargolzaei, and Prof. Xiaomin Lin
🐠 WPNMR 2026 workshop poster: AquaBEV-Nav: An Underwater Exploration System via Learned BEV Occupancy
with Zhenqi Wu and Prof. Xiaomin Lin

Standing next to my own poster and explaining the work to people from all over the world was a little nerve wracking at first, but it quickly became the best part of the trip. The questions and feedback I got have already given me new directions to try.

Outside the sessions, I got to meet researchers whose papers I've read many times, and make new friends working on different areas of robotics. I'm leaving with a notebook full of ideas and a lot more motivation.

I'm very grateful to Prof. Xiaomin Lin for making this possible and for his guidance along the way, and to my co-authors and lab mates for all their hard work.

A memorable first IROS, and definitely not the last. Looking forward to bringing these ideas and connections back into our future research!
#IROS2026 #Robotics #UnderwaterRobotics #AutonomousDriving #SensorFusion #RoboticsPerception`
  },
  {
    id: 'noaa-grant',
    date: '2026-09-14',
    title: 'ERA Lab joins an $8.5M NOAA seafloor-mapping award',
    summary: 'USF College of Marine Science awarded $8.5M from NOAA Coast Survey — ERA Lab brings multimodal AI onto the robots.',
    tags: ['Lab news'],
    via: 'Xiaomin Lin',
    url: 'https://www.linkedin.com/feed/update/urn:li:share:7505325366425845760/',
    body: `Reposted from my advisor, Prof. Xiaomin Lin: the USF College of Marine Science has been awarded a five-year, $8.5 million cooperative agreement from NOAA's Office of Coast Survey to advance seafloor mapping with AI and robotics, alongside COMIT (Center for Ocean Mapping and Innovative Technologies). In ERA Lab we put multimodal AI directly onto robotic vehicles so they can make real-time decisions underwater — and I'm excited to be part of the team working on it.`
  },
  {
    id: 'leading-macvi-sonar',
    date: '2026-09-10',
    title: 'Leading the 3D sonar challenge at MaCVi @ WACV 2027',
    summary: "I'll be leading the 3D sonar detection challenge for MaCVi @ WACV 2027 in Orlando.",
    tags: ['Challenge', 'MaCVi @ WACV 2027'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7504012228053073921/',
    body: `Excited to share that I'll be leading the 3D sonar detection challenge for MaCVi @ WACV 2027, the 5th Workshop on Maritime Computer Vision, happening in Orlando, FL!

If you work on underwater perception, sonar-based detection, or multimodal fusion for marine robotics, this is a great venue to submit to.`
  },
  {
    id: 'joining-era-lab',
    date: '2026-04-24',
    title: 'Starting my PhD at ERA Lab',
    summary: 'Joining the Embodied Robotics and Autonomy (ERA) Lab at USF as a PhD student, Fall 2026.',
    tags: ['Milestone'],
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7453474367784603648/',
    body: `Grateful for this opportunity and excited to start this next chapter!
Thank you to Prof. Xiaomin Lin for trusting me and welcoming me into the ERA Lab. I'm really looking forward to learning and contributing to the work in robotics and perception.
Also, a big thank you to Prof. Arman Sargolzaei for the mentorship and guidance throughout my undergraduate journey.`
  },
  {
    id: 'pfs-preprint',
    date: '2026-03-12',
    title: 'PFS preprint is on arXiv',
    summary: 'Preprint of Post-Fusion BEV Feature Stabilization (PFS) is out on arXiv.',
    tags: ['Paper'],
    via: 'ERA Lab',
    url: 'https://www.linkedin.com/feed/update/urn:li:share:7437989089426993152/',
    body: `Reposted from ERA Lab: our preprint "Post Fusion Bird's Eye View Feature Stabilization for Robust Multimodal 3D Detection" is on arXiv. PFS is a lightweight plug-in head that sits on the fused BEV feature map of an existing camera–LiDAR detector — it stabilizes features with shift normalization, suppresses corrupted regions with a spatial reliability mask, and applies a gated residual correction, while staying near-identity at initialization so clean performance is preserved. A collaboration between ERA Lab and RANCS Lab.

📄 Paper: https://arxiv.org/abs/2603.05623`
  }
];
