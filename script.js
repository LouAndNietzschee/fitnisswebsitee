document.addEventListener('DOMContentLoaded', function() {
  const heightInput = document.getElementById('height');
  const weightInput = document.getElementById('weight');
  const daysRadios = document.querySelectorAll('input[name="days"]');
  const calculateBtn = document.getElementById('calculate-btn');
  const errorAlert = document.getElementById('error-alert');
  const errorMessage = document.getElementById('error-message');
  const resultsSection = document.getElementById('results');
  const bmiValue = document.getElementById('bmi-value');
  const bmiCategory = document.getElementById('bmi-category');
  const programTitle = document.getElementById('program-title');
  const programDescription = document.getElementById('program-description');
  const programIcon = document.getElementById('program-icon');
  const programDays = document.getElementById('program-days');
  const programSchedule = document.getElementById('program-schedule');
  const programTips = document.getElementById('program-tips');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const langButtons = document.querySelectorAll('.lang-btn');

  const translations = {
    tr: {
      'main-title': 'Fitness Program Oluşturucu',
      'main-description': 'Boy ve kilo bilgilerinizi girerek size özel fitness programınızı oluşturun.',
      'nav-home': 'Ana Sayfa',
      'nav-about': 'Hakkımda',
      'nav-contact': 'İletişim',
      
      'bmi-title': 'Vücut Kitle İndeksi (BMI) Hesaplama',
      'bmi-description': 'Boy ve kilo bilgilerinizi girerek BMI değerinizi hesaplayın.',
      'height-label': 'Boy (cm)',
      'weight-label': 'Kilo (kg)',
      'days-label': 'Haftada kaç gün fitness yapabilirsiniz?',
      'days-2-label': '2 gün',
      'days-3-label': '3 gün',
      'days-4-label': '4 gün',
      'days-5-label': '5 gün',
      'calculate-text': 'Hesapla ve Program Oluştur',
      'error-title': 'Hata',
      'error-empty': 'Lütfen boy ve kilo değerlerinizi girin.',
      'error-invalid': 'Lütfen geçerli boy ve kilo değerleri girin.',
      
      'result-title': 'BMI Sonucunuz',
      'bmi-categories-title': 'BMI Kategorileri',
      'bmi-underweight-range': '18.5\'in altı:',
      'bmi-normal-range': '18.5 - 24.9 arası:',
      'bmi-overweight-range': '25 ve üzeri:',
      'bmi-underweight': 'Zayıf',
      'bmi-normal': 'Normal',
      'bmi-overweight': 'Kilolu',
      'tips-title': 'Beslenme ve Egzersiz Önerileri',
      
      'category-underweight': 'zayıf',
      'category-normal': 'normal',
      'category-overweight': 'kilolu',
      
      'program-title-underweight': 'Kilo Alma ve Kas Geliştirme Programı',
      'program-desc-underweight': 'Bu program, sağlıklı kilo almanıza ve kas kütlenizi artırmanıza yardımcı olacak.',
      'program-title-normal': 'Kas Tonu ve Genel Fitness Programı',
      'program-desc-normal': 'Bu program, mevcut formunuzu korurken kas tonunuzu geliştirmenize yardımcı olacak.',
      'program-title-overweight': 'Kilo Verme ve Kondisyon Programı',
      'program-desc-overweight': 'Bu program, sağlıklı kilo vermenize ve genel kondisyonunuzu artırmanıza yardımcı olacak.',
      'program-days-text': 'Haftalık Program ({days} gün)',
      
      'about-title': 'Hakkımda',
      'about-subtitle': 'Bilgisayar Mühendisliği Öğrencisi',
      'personal-info-title': 'Kişisel Bilgiler',
      'personal-info-text': 'Merhaba! Ben Kaan Arslan, bilgisayar mühendisliği öğrencisiyim. Yazılım geliştirme ve web teknolojileri konusunda projeler geliştirmekteyim. Özellikle Full-Stack geliştirme ve kullanıcı deneyimi tasarımı alanlarında kendimi geliştiriyorum.',
      'project-info-title': 'Proje Hakkında',
      'project-info-text-1': 'Bu fitness programı oluşturucu, web geliştirme becerilerimi ilerletmek ve aynı zamanda sağlıklı yaşam konusundaki ilgimi birleştirmek için tasarladığım bir projedir. Modern web teknolojilerini kullanarak, kullanıcıların kişisel fitness hedeflerine ulaşmalarına yardımcı olmayı amaçlıyorum.',
      'project-info-text-2': 'Proje, vücut kitle indeksi hesaplaması yaparak kullanıcılara özelleştirilmiş fitness programları sunuyor. Gelecekte, ilerleme takibi, beslenme önerileri ve daha fazla özelleştirme seçenekleri eklemeyi planlıyorum.',
      'interests-title': 'İlgi Alanlarım',
      'interest-1': 'Web Geliştirme (HTML, CSS, JavaScript)',
      'interest-2': 'Fitness ve Sağlıklı Yaşam',
      'interest-3': 'Mobil Uygulama Geliştirme',
      'interest-4': 'Yapay Zeka ve Veri Bilimi',
      
      'contact-title': 'İletişim',
      'contact-intro': 'Benimle iletişime geçmek için aşağıdaki formu doldurabilir veya e-posta adresimi kullanabilirsiniz.',
      'contact-name-label': 'Adınız',
      'contact-email-label': 'E-posta',
      'contact-message-label': 'Mesajınız',
      'contact-submit': 'Gönder',
      'contact-info-title': 'İletişim Bilgileri',
      'contact-email-info': 'E-posta:',
      'contact-social-info': 'Sosyal Medya:',
      
      'copyright': '© 2025 Fitness Program Oluşturucu. Tüm hakları saklıdır.',
      'disclaimer': 'Bu uygulama sadece bilgilendirme amaçlıdır. Profesyonel sağlık tavsiyesi için lütfen bir uzmana danışın.',
      
      'day-1': '1. Gün',
      'day-2': '2. Gün',
      'day-3': '3. Gün',
      'day-4': '4. Gün',
      'day-5': '5. Gün',
      
      'underweight-tip-1': 'Günlük kalori ihtiyacınızdan 300-500 kalori fazla tüketin',
      'underweight-tip-2': 'Protein alımınızı artırın (vücut ağırlığınızın her kg\'ı için 1.6-2g)',
      'underweight-tip-3': 'Kompleks karbonhidratlar ve sağlıklı yağlar tüketin',
      'underweight-tip-4': 'Her öğünde protein içeren besinler yemeye çalışın',
      'underweight-tip-5': 'Ağırlıkları kademeli olarak artırın (progresif yüklenme)',
      
      'normal-tip-1': 'Günlük kalori ihtiyacınızı dengeli bir şekilde karşılayın',
      'normal-tip-2': 'Protein alımınızı koruyun (vücut ağırlığınızın her kg\'ı için 1.4-1.6g)',
      'normal-tip-3': 'Dengeli beslenmeye özen gösterin (protein, karbonhidrat, sağlıklı yağlar)',
      'normal-tip-4': 'Egzersiz yoğunluğunu kademeli olarak artırın',
      'normal-tip-5': 'Düzenli kardiyovasküler egzersizler ekleyin (haftada 2-3 kez, 20-30 dakika)',
      
      'overweight-tip-1': 'Günlük kalori ihtiyacınızdan 300-500 kalori az tüketin',
      'overweight-tip-2': 'Protein alımınızı koruyun (vücut ağırlığınızın her kg\'ı için 1.6-2g)',
      'overweight-tip-3': 'İşlenmiş gıdalar ve şekerli içeceklerden kaçının',
      'overweight-tip-4': 'Su tüketiminizi artırın (günde en az 2-3 litre)',
      'overweight-tip-5': 'Düzenli kardiyovasküler egzersizler yapın',
      'overweight-tip-6': 'Ağırlık antrenmanlarını ihmal etmeyin (kas kütlesi metabolizmanızı hızlandırır)'
    },
    en: {
      'main-title': 'Fitness Program Generator',
      'main-description': 'Create your personalized fitness program by entering your height and weight information.',
      'nav-home': 'Home',
      'nav-about': 'About Me',
      'nav-contact': 'Contact',
      
      'bmi-title': 'Body Mass Index (BMI) Calculator',
      'bmi-description': 'Calculate your BMI by entering your height and weight information.',
      'height-label': 'Height (cm)',
      'weight-label': 'Weight (kg)',
      'days-label': 'How many days per week can you do fitness?',
      'days-2-label': '2 days',
      'days-3-label': '3 days',
      'days-4-label': '4 days',
      'days-5-label': '5 days',
      'calculate-text': 'Calculate and Create Program',
      'error-title': 'Error',
      'error-empty': 'Please enter your height and weight values.',
      'error-invalid': 'Please enter valid height and weight values.',
      
      'result-title': 'Your BMI Result',
      'bmi-categories-title': 'BMI Categories',
      'bmi-underweight-range': 'Below 18.5:',
      'bmi-normal-range': 'Between 18.5 - 24.9:',
      'bmi-overweight-range': '25 and above:',
      'bmi-underweight': 'Underweight',
      'bmi-normal': 'Normal',
      'bmi-overweight': 'Overweight',
      'tips-title': 'Nutrition and Exercise Recommendations',
      
      'category-underweight': 'underweight',
      'category-normal': 'normal',
      'category-overweight': 'overweight',
      
      'program-title-underweight': 'Weight Gain and Muscle Building Program',
      'program-desc-underweight': 'This program will help you gain healthy weight and increase your muscle mass.',
      'program-title-normal': 'Muscle Tone and General Fitness Program',
      'program-desc-normal': 'This program will help you improve your muscle tone while maintaining your current form.',
      'program-title-overweight': 'Weight Loss and Conditioning Program',
      'program-desc-overweight': 'This program will help you lose weight in a healthy way and improve your overall conditioning.',
      'program-days-text': 'Weekly Program ({days} days)',
      
      'about-title': 'About Me',
      'about-subtitle': 'Computer Engineering Student',
      'personal-info-title': 'Personal Information',
      'personal-info-text': 'Hello! I\'m Kaan Arslan, a computer engineering student. I\'m passionate about software development and web technologies. I\'m particularly focused on developing my skills in frontend development and user experience design.',
      'project-info-title': 'About the Project',
      'project-info-text-1': 'This fitness program generator is a project I designed to advance my web development skills while combining my interest in healthy living. Using modern web technologies, I aim to help users reach their personal fitness goals.',
      'project-info-text-2': 'The project provides customized fitness programs by calculating body mass index. In the future, I plan to add progress tracking, nutrition recommendations, and more customization options.',
      'interests-title': 'My Interests',
      'interest-1': 'Web Development (HTML, CSS, JavaScript)',
      'interest-2': 'Fitness and Healthy Living',
      'interest-3': 'Mobile App Development',
      'interest-4': 'Artificial Intelligence and Data Science',
      
      'contact-title': 'Contact',
      'contact-intro': 'You can fill out the form below or use my email address to contact me.',
      'contact-name-label': 'Your Name',
      'contact-email-label': 'Email',
      'contact-message-label': 'Your Message',
      'contact-submit': 'Send',
      'contact-info-title': 'Contact Information',
      'contact-email-info': 'Email:',
      'contact-social-info': 'Social Media:',
      
      'copyright': '© 2025 Fitness Program Generator. All rights reserved.',
      'disclaimer': 'This application is for informational purposes only. Please consult a professional for health advice.',
      
      'day-1': 'Day 1',
      'day-2': 'Day 2',
      'day-3': 'Day 3',
      'day-4': 'Day 4',
      'day-5': 'Day 5',
      
      'underweight-tip-1': 'Consume 300-500 calories more than your daily caloric needs',
      'underweight-tip-2': 'Increase your protein intake (1.6-2g per kg of your body weight)',
      'underweight-tip-3': 'Consume complex carbohydrates and healthy fats',
      'underweight-tip-4': 'Try to eat protein-containing foods at every meal',
      'underweight-tip-5': 'Gradually increase weights (progressive overload)',
      
      'normal-tip-1': 'Balance your daily caloric intake',
      'normal-tip-2': 'Maintain your protein intake (1.4-1.6g per kg of your body weight)',
      'normal-tip-3': 'Focus on balanced nutrition (protein, carbohydrates, healthy fats)',
      'normal-tip-4': 'Gradually increase exercise intensity',
      'normal-tip-5': 'Add regular cardiovascular exercises (2-3 times a week, 20-30 minutes)',
      
      'overweight-tip-1': 'Consume 300-500 calories less than your daily caloric needs',
      'overweight-tip-2': 'Maintain your protein intake (1.6-2g per kg of your body weight)',
      'overweight-tip-3': 'Avoid processed foods and sugary drinks',
      'overweight-tip-4': 'Increase your water intake (at least 2-3 liters per day)',
      'overweight-tip-5': 'Do regular cardiovascular exercises',
      'overweight-tip-6': 'Don\'t neglect weight training (muscle mass speeds up your metabolism)'
    }
  };

  const fitnessPrograms = {
    tr: {
      zayıf: {
        title: translations.tr['program-title-underweight'],
        description: translations.tr['program-desc-underweight'],
        iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                    <path d="M6.5 6.5h11"></path>
                    <path d="M6.5 17.5h11"></path>
                    <path d="M3 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                    <path d="M16 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                    <path d="M3 14a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                    <path d="M16 14a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                  </svg>`,
        days: {
          2: [
            {
              day: translations.tr['day-1'],
              exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8", "Protein açısından zengin beslenme"],
            },
            {
              day: translations.tr['day-2'],
              exercises: [
                "Deadlift: 3x8",
                "Overhead Press: 3x8",
                "Pull-ups: 3 set (yapabildiğiniz kadar)",
                "Kalori açısından zengin beslenme",
              ],
            },
          ],
          3: [
            { day: translations.tr['day-1'], exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8"] },
            { day: translations.tr['day-2'], exercises: ["Deadlift: 3x8", "Overhead Press: 3x8", "Pull-ups: 3 set"] },
            { day: translations.tr['day-3'], exercises: ["Leg Press: 3x10", "Incline Press: 3x10", "Lat Pulldown: 3x10"] },
          ],
          4: [
            { day: translations.tr['day-1'], exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8"] },
            { day: translations.tr['day-2'], exercises: ["Deadlift: 3x8", "Overhead Press: 3x8", "Pull-ups: 3 set"] },
            { day: translations.tr['day-3'], exercises: ["Leg Press: 3x10", "Incline Press: 3x10", "Lat Pulldown: 3x10"] },
            { day: translations.tr['day-4'], exercises: ["Lunges: 3x10", "Dips: 3x10", "Face Pulls: 3x15", "Calf Raises: 3x15"] },
          ],
          5: [
            { day: translations.tr['day-1'], exercises: ["Squat: 4x8", "Bench Press: 4x8", "Barbell Row: 4x8"] },
            { day: translations.tr['day-2'], exercises: ["Deadlift: 4x8", "Overhead Press: 4x8", "Pull-ups: 4 set"] },
            { day: translations.tr['day-3'], exercises: ["Leg Press: 4x10", "Incline Press: 4x10", "Lat Pulldown: 4x10"] },
            { day: translations.tr['day-4'], exercises: ["Lunges: 4x10", "Dips: 4x10", "Face Pulls: 4x15"] },
            {
              day: translations.tr['day-5'],
              exercises: ["Front Squat: 3x8", "Close-Grip Bench: 3x8", "T-Bar Row: 3x8", "Calf Raises: 4x15"],
            },
          ],
        },
        tips: [
          translations.tr['underweight-tip-1'],
          translations.tr['underweight-tip-2'],
          translations.tr['underweight-tip-3'],
          translations.tr['underweight-tip-4'],
          translations.tr['underweight-tip-5'],
        ],
      },
      normal: {
        title: translations.tr['program-title-normal'],
        description: translations.tr['program-desc-normal'],
        iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #22c55e; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                    <path d="M8.21 13.89 7 23l9-9-8.99-9L7 13.89"></path>
                    <path d="M9.41 17.59 14 23"></path>
                    <path d="m14 13-4.59 4.59"></path>
                    <path d="M15 9 9.41 3.41"></path>
                    <path d="M20 4 8.21 15.79"></path>
                  </svg>`,
        days: {
          2: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Full Body Workout: Squat: 3x10",
                "Push-ups: 3x10",
                "Bent-over Row: 3x10",
                "Plank: 3x30 saniye",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: [
                "Full Body Workout: Lunges: 3x10",
                "Dips: 3x8",
                "Pull-ups: 3 set (yapabildiğiniz kadar)",
                "Russian Twists: 3x20",
              ],
            },
          ],
          3: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Push: Bench Press: 3x10",
                "Shoulder Press: 3x10",
                "Tricep Extensions: 3x12",
                "Push-ups: 2 set",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: ["Pull: Pull-ups: 3 set", "Barbell Row: 3x10", "Face Pulls: 3x15", "Bicep Curls: 3x12"],
            },
            {
              day: translations.tr['day-3'],
              exercises: ["Legs: Squat: 3x10", "Romanian Deadlift: 3x10", "Leg Press: 3x12", "Calf Raises: 3x15"],
            },
          ],
          4: [
            {
              day: translations.tr['day-1'],
              exercises: ["Upper Body: Bench Press: 3x10", "Rows: 3x10", "Shoulder Press: 3x10", "Pull-ups: 3 set"],
            },
            {
              day: translations.tr['day-2'],
              exercises: ["Lower Body: Squat: 3x10", "Deadlift: 3x8", "Lunges: 3x10", "Calf Raises: 3x15"],
            },
            {
              day: translations.tr['day-3'],
              exercises: ["Push: Incline Press: 3x10", "Dips: 3x10", "Lateral Raises: 3x15", "Tricep Extensions: 3x12"],
            },
            {
              day: translations.tr['day-4'],
              exercises: ["Pull: Pull-ups: 3 set", "Barbell Row: 3x10", "Face Pulls: 3x15", "Bicep Curls: 3x12"],
            },
          ],
          5: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Chest & Triceps: Bench Press: 3x10",
                "Incline Press: 3x10",
                "Dips: 3x10",
                "Tricep Extensions: 3x12",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: [
                "Back & Biceps: Pull-ups: 3 set",
                "Barbell Row: 3x10",
                "Face Pulls: 3x15",
                "Bicep Curls: 3x12",
              ],
            },
            {
              day: translations.tr['day-3'],
              exercises: ["Legs: Squat: 3x10", "Romanian Deadlift: 3x10", "Leg Press: 3x12", "Calf Raises: 3x15"],
            },
            {
              day: translations.tr['day-4'],
              exercises: [
                "Shoulders: Overhead Press: 3x10",
                "Lateral Raises: 3x15",
                "Front Raises: 3x15",
                "Rear Delt Flies: 3x15",
              ],
            },
            {
              day: translations.tr['day-5'],
              exercises: ["Full Body: Deadlift: 3x8", "Push-ups: 3x12", "Pull-ups: 3 set", "Plank: 3x45 saniye"],
            },
          ],
        },
        tips: [
          translations.tr['normal-tip-1'],
          translations.tr['normal-tip-2'],
          translations.tr['normal-tip-3'],
          translations.tr['normal-tip-4'],
          translations.tr['normal-tip-5'],
        ],
      },
      kilolu: {
        title: translations.tr['program-title-overweight'],
        description: translations.tr['program-desc-overweight'],
        iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f97316; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>`,
        days: {
          2: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Yürüyüş: 30 dakika",
                "Squat: 3x12",
                "Push-ups (dizler yerde olabilir): 3x10",
                "Plank: 3x20 saniye",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: ["Yürüyüş: 30 dakika", "Lunges: 3x10", "Dumbbell Row: 3x12", "Bicycle Crunches: 3x20"],
            },
          ],
          3: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Kardiyovasküler: 30 dakika tempolu yürüyüş veya hafif koşu",
                "Squat: 3x12",
                "Push-ups: 3x10",
                "Plank: 3x30 saniye",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: [
                "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
                "Lunges: 3x10",
                "Dumbbell Row: 3x12",
                "Russian Twists: 3x20",
              ],
            },
            {
              day: translations.tr['day-3'],
              exercises: [
                "Kardiyovasküler: 30 dakika tempolu yürüyüş veya hafif koşu",
                "Glute Bridge: 3x15",
                "Tricep Dips: 3x10",
                "Bicycle Crunches: 3x20",
              ],
            },
          ],
          4: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Kardiyovasküler: 30 dakika tempolu yürüyüş",
                "Full Body: Squat: 3x12",
                "Push-ups: 3x10",
                "Dumbbell Row: 3x12",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: [
                "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
                "Core: Plank: 3x30 saniye",
                "Russian Twists: 3x20",
                "Leg Raises: 3x12",
              ],
            },
            {
              day: translations.tr['day-3'],
              exercises: [
                "Kardiyovasküler: 30 dakika tempolu yürüyüş",
                "Lower Body: Lunges: 3x10",
                "Glute Bridge: 3x15",
                "Calf Raises: 3x15",
              ],
            },
            {
              day: translations.tr['day-4'],
              exercises: [
                "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
                "Upper Body: Push-ups: 3x10",
                "Tricep Dips: 3x10",
                "Dumbbell Row: 3x12",
              ],
            },
          ],
          5: [
            {
              day: translations.tr['day-1'],
              exercises: [
                "Kardiyovasküler: 30 dakika tempolu yürüyüş",
                "Lower Body: Squat: 3x12",
                "Lunges: 3x10",
                "Glute Bridge: 3x15",
              ],
            },
            {
              day: translations.tr['day-2'],
              exercises: [
                "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
                "Upper Body: Push-ups: 3x10",
                "Dumbbell Row: 3x12",
                "Lateral Raises: 3x15",
              ],
            },
            {
              day: translations.tr['day-3'],
              exercises: [
                "Kardiyovasküler: 30 dakika tempolu yürüyüş",
                "Core: Plank: 3x30 saniye",
                "Russian Twists: 3x20",
                "Bicycle Crunches: 3x20",
              ],
            },
            {
              day: translations.tr['day-4'],
              exercises: [
                "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
                "Full Body: Squat: 3x12",
                "Push-ups: 3x10",
                "Dumbbell Row: 3x12",
              ],
            },
            {
              day: translations.tr['day-5'],
              exercises: [
                "Kardiyovasküler: 45 dakika tempolu yürüyüş veya hafif koşu",
                "Stretching ve Mobility çalışması: 15 dakika",
              ],
            },
          ],
        },
        tips: [
          translations.tr['overweight-tip-1'],
          translations.tr['overweight-tip-2'],
          translations.tr['overweight-tip-3'],
          translations.tr['overweight-tip-4'],
          translations.tr['overweight-tip-5'],
          translations.tr['overweight-tip-6'],
        ],
      },
    },
    en: {
      underweight: {
        title: translations.en['program-title-underweight'],
        description: translations.en['program-desc-underweight'],
        iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #3b82f6; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                    <path d="M6.5 6.5h11"></path>
                    <path d="M6.5 17.5h11"></path>
                    <path d="M3 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                    <path d="M16 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                    <path d="M3 14a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                    <path d="M16 14a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                  </svg>`,
        days: {
          2: [
            {
              day: translations.en['day-1'],
              exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8", "Protein-rich diet"],
            },
            {
              day: translations.en['day-2'],
              exercises: [
                "Deadlift: 3x8",
                "Overhead Press: 3x8",
                "Pull-ups: 3 sets (as many as you can)",
                "Calorie-rich diet",
              ],
            },
          ],
          3: [
            { day: translations.en['day-1'], exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8"] },
            { day: translations.en['day-2'], exercises: ["Deadlift: 3x8", "Overhead Press: 3x8", "Pull-ups: 3 sets"] },
            { day: translations.en['day-3'], exercises: ["Leg Press: 3x10", "Incline Press: 3x10", "Lat Pulldown: 3x10"] },
          ],
          4: [
            { day: translations.en['day-1'], exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8"] },
            { day: translations.en['day-2'], exercises: ["Deadlift: 3x8", "Overhead Press: 3x8", "Pull-ups: 3 sets"] },
            { day: translations.en['day-3'], exercises: ["Leg Press: 3x10", "Incline Press: 3x10", "Lat Pulldown: 3x10"] },
            { day: translations.en['day-4'], exercises: ["Lunges: 3x10", "Dips: 3x10", "Face Pulls: 3x15", "Calf Raises: 3x15"] },
          ],
          5: [
            { day: translations.en['day-1'], exercises: ["Squat: 4x8", "Bench Press: 4x8", "Barbell Row: 4x8"] },
            { day: translations.en['day-2'], exercises: ["Deadlift: 4x8", "Overhead Press: 4x8", "Pull-ups: 4 sets"] },
            { day: translations.en['day-3'], exercises: ["Leg Press: 4x10", "Incline Press: 4x10", "Lat Pulldown: 4x10"] },
            { day: translations.en['day-4'], exercises: ["Lunges: 4x10", "Dips: 4x10", "Face Pulls: 4x15"] },
            {
              day: translations.en['day-5'],
              exercises: ["Front Squat: 3x8", "Close-Grip Bench: 3x8", "T-Bar Row: 3x8", "Calf Raises: 4x15"],
            },
          ],
        },
        tips: [
          translations.en['underweight-tip-1'],
          translations.en['underweight-tip-2'],
          translations.en['underweight-tip-3'],
          translations.en['underweight-tip-4'],
          translations.en['underweight-tip-5'],
        ],
      },
      normal: {
        title: translations.en['program-title-normal'],
        description: translations.en['program-desc-normal'],
        iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #22c55e; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                    <path d="M8.21 13.89 7 23l9-9-8.99-9L7 13.89"></path>
                    <path d="M9.41 17.59 14 23"></path>
                    <path d="m14 13-4.59 4.59"></path>
                    <path d="M15 9 9.41 3.41"></path>
                    <path d="M20 4 8.21 15.79"></path>
                  </svg>`,
        days: {
          2: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Full Body Workout: Squat: 3x10",
                "Push-ups: 3x10",
                "Bent-over Row: 3x10",
                "Plank: 3x30 seconds",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: [
                "Full Body Workout: Lunges: 3x10",
                "Dips: 3x8",
                "Pull-ups: 3 sets (as many as you can)",
                "Russian Twists: 3x20",
              ],
            },
          ],
          3: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Push: Bench Press: 3x10",
                "Shoulder Press: 3x10",
                "Tricep Extensions: 3x12",
                "Push-ups: 2 sets",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: ["Pull: Pull-ups: 3 sets", "Barbell Row: 3x10", "Face Pulls: 3x15", "Bicep Curls: 3x12"],
            },
            {
              day: translations.en['day-3'],
              exercises: ["Legs: Squat: 3x10", "Romanian Deadlift: 3x10", "Leg Press: 3x12", "Calf Raises: 3x15"],
            },
          ],
          4: [
            {
              day: translations.en['day-1'],
              exercises: ["Upper Body: Bench Press: 3x10", "Rows: 3x10", "Shoulder Press: 3x10", "Pull-ups: 3 sets"],
            },
            {
              day: translations.en['day-2'],
              exercises: ["Lower Body: Squat: 3x10", "Deadlift: 3x8", "Lunges: 3x10", "Calf Raises: 3x15"],
            },
            {
              day: translations.en['day-3'],
              exercises: ["Push: Incline Press: 3x10", "Dips: 3x10", "Lateral Raises: 3x15", "Tricep Extensions: 3x12"],
            },
            {
              day: translations.en['day-4'],
              exercises: ["Pull: Pull-ups: 3 sets", "Barbell Row: 3x10", "Face Pulls: 3x15", "Bicep Curls: 3x12"],
            },
          ],
          5: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Chest & Triceps: Bench Press: 3x10",
                "Incline Press: 3x10",
                "Dips: 3x10",
                "Tricep Extensions: 3x12",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: [
                "Back & Biceps: Pull-ups: 3 sets",
                "Barbell Row: 3x10",
                "Face Pulls: 3x15",
                "Bicep Curls: 3x12",
              ],
            },
            {
              day: translations.en['day-3'],
              exercises: ["Legs: Squat: 3x10", "Romanian Deadlift: 3x10", "Leg Press: 3x12", "Calf Raises: 3x15"],
            },
            {
              day: translations.en['day-4'],
              exercises: [
                "Shoulders: Overhead Press: 3x10",
                "Lateral Raises: 3x15",
                "Front Raises: 3x15",
                "Rear Delt Flies: 3x15",
              ],
            },
            {
              day: translations.en['day-5'],
              exercises: ["Full Body: Deadlift: 3x8", "Push-ups: 3x12", "Pull-ups: 3 sets", "Plank: 3x45 seconds"],
            },
          ],
        },
        tips: [
          translations.en['normal-tip-1'],
          translations.en['normal-tip-2'],
          translations.en['normal-tip-3'],
          translations.en['normal-tip-4'],
          translations.en['normal-tip-5'],
        ],
      },
      overweight: {
        title: translations.en['program-title-overweight'],
        description: translations.en['program-desc-overweight'],
        iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f97316; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>`,
        days: {
          2: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Walking: 30 minutes",
                "Squat: 3x12",
                "Push-ups (knees on floor if needed): 3x10",
                "Plank: 3x20 seconds",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: ["Walking: 30 minutes", "Lunges: 3x10", "Dumbbell Row: 3x12", "Bicycle Crunches: 3x20"],
            },
          ],
          3: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Cardiovascular: 30 minutes brisk walking or light jogging",
                "Squat: 3x12",
                "Push-ups: 3x10",
                "Plank: 3x30 seconds",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: [
                "HIIT: 20 minutes (30 seconds work, 30 seconds rest)",
                "Lunges: 3x10",
                "Dumbbell Row: 3x12",
                "Russian Twists: 3x20",
              ],
            },
            {
              day: translations.en['day-3'],
              exercises: [
                "Cardiovascular: 30 minutes brisk walking or light jogging",
                "Glute Bridge: 3x15",
                "Tricep Dips: 3x10",
                "Bicycle Crunches: 3x20",
              ],
            },
          ],
          4: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Cardiovascular: 30 minutes brisk walking",
                "Full Body: Squat: 3x12",
                "Push-ups: 3x10",
                "Dumbbell Row: 3x12",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: [
                "HIIT: 20 minutes (30 seconds work, 30 seconds rest)",
                "Core: Plank: 3x30 seconds",
                "Russian Twists: 3x20",
                "Leg Raises: 3x12",
              ],
            },
            {
              day: translations.en['day-3'],
              exercises: [
                "Cardiovascular: 30 minutes brisk walking",
                "Lower Body: Lunges: 3x10",
                "Glute Bridge: 3x15",
                "Calf Raises: 3x15",
              ],
            },
            {
              day: translations.en['day-4'],
              exercises: [
                "HIIT: 20 minutes (30 seconds work, 30 seconds rest)",
                "Upper Body: Push-ups: 3x10",
                "Tricep Dips: 3x10",
                "Dumbbell Row: 3x12",
              ],
            },
          ],
          5: [
            {
              day: translations.en['day-1'],
              exercises: [
                "Cardiovascular: 30 minutes brisk walking",
                "Lower Body: Squat: 3x12",
                "Lunges: 3x10",
                "Glute Bridge: 3x15",
              ],
            },
            {
              day: translations.en['day-2'],
              exercises: [
                "HIIT: 20 minutes (30 seconds work, 30 seconds rest)",
                "Upper Body: Push-ups: 3x10",
                "Dumbbell Row: 3x12",
                "Lateral Raises: 3x15",
              ],
            },
            {
              day: translations.en['day-3'],
              exercises: [
                "Cardiovascular: 30 minutes brisk walking",
                "Core: Plank: 3x30 seconds",
                "Russian Twists: 3x20",
                "Bicycle Crunches: 3x20",
              ],
            },
            {
              day: translations.en['day-4'],
              exercises: [
                "HIIT: 20 minutes (30 seconds work, 30 seconds rest)",
                "Full Body: Squat: 3x12",
                "Push-ups: 3x10",
                "Dumbbell Row: 3x12",
              ],
            },
            {
              day: translations.en['day-5'],
              exercises: [
                "Cardiovascular: 45 minutes brisk walking or light jogging",
                "Stretching and Mobility work: 15 minutes",
              ],
            },
          ],
        },
        tips: [
          translations.en['overweight-tip-1'],
          translations.en['overweight-tip-2'],
          translations.en['overweight-tip-3'],
          translations.en['overweight-tip-4'],
          translations.en['overweight-tip-5'],
          translations.en['overweight-tip-6'],
        ],
      },
    }
  };

  let currentLang = 'tr';

  function changeLanguage(lang) {
    currentLang = lang;
    
    langButtons.forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    updateAllTexts();
    
    document.documentElement.lang = lang;
  }
  
  function updateAllTexts() {
    const elements = document.querySelectorAll('[id]');
    
    elements.forEach(element => {
      const id = element.id;
      
      if (translations[currentLang][id]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[currentLang][id];
        } else {
          element.textContent = translations[currentLang][id];
        }
      }
    });
  }

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(currentLang === 'tr' ? 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.' : 'Your message has been sent! We will get back to you as soon as possible.');
      contactForm.reset();
    });
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetPageId = this.getAttribute('data-page');
      
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
      
      pages.forEach(page => {
        if (page.id === targetPageId) {
          page.classList.add('active');
        } else {
          page.classList.remove('active');
        }
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  calculateBtn.addEventListener('click', function() {
    const height = heightInput.value;
    const weight = weightInput.value;
    let daysPerWeek = "3"; 

    for (const radio of daysRadios) {
      if (radio.checked) {
        daysPerWeek = radio.value;
        break;
      }
    }

    if (!height || !weight) {
      showError(translations[currentLang]['error-empty']);
      return;
    }

    const heightInM = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInM) || isNaN(weightInKg) || heightInM <= 0 || weightInKg <= 0) {
      showError(translations[currentLang]['error-invalid']);
      return;
    }

    const bmiValue = weightInKg / (heightInM * heightInM);
    const bmiValueRounded = parseFloat(bmiValue.toFixed(1));

    let category;
    if (bmiValue < 18.5) {
      category = translations[currentLang]['category-underweight'];
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      category = translations[currentLang]['category-normal'];
    } else {
      category = translations[currentLang]['category-overweight'];
    }

    showResults(bmiValueRounded, category, daysPerWeek);
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorAlert.style.display = 'block';
    resultsSection.style.display = 'none';
  }

  function showResults(bmi, category, daysPerWeek) {
    errorAlert.style.display = 'none';
    
    bmiValue.textContent = bmi;
    bmiCategory.textContent = category;
    
    switch(category) {
      case translations[currentLang]['category-underweight']:
        bmiCategory.className = 'bmi-category text-blue';
        break;
      case translations[currentLang]['category-normal']:
        bmiCategory.className = 'bmi-category text-green';
        break;
      case translations[currentLang]['category-overweight']:
        bmiCategory.className = 'bmi-category text-orange';
        break;
    }
    
    const program = fitnessPrograms[currentLang][category];
    programTitle.textContent = program.title;
    programDescription.textContent = program.description;
    programIcon.innerHTML = program.iconSvg;
    programDays.textContent = translations[currentLang]['program-days-text'].replace('{days}', daysPerWeek);
    
    programSchedule.innerHTML = '';
    program.days[daysPerWeek].forEach(day => {
      const dayCard = document.createElement('div');
      dayCard.className = 'day-card';
      
      const dayTitle = document.createElement('h4');
      dayTitle.className = 'day-title';
      dayTitle.textContent = day.day;
      
      const exercisesList = document.createElement('ul');
      exercisesList.className = 'day-exercises';
      
      day.exercises.forEach(exercise => {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = exercise;
        exercisesList.appendChild(exerciseItem);
      });
      
      dayCard.appendChild(dayTitle);
      dayCard.appendChild(exercisesList);
      programSchedule.appendChild(dayCard);
    });
    
    programTips.innerHTML = '';
    program.tips.forEach(tip => {
      const tipItem = document.createElement('li');
      tipItem.textContent = tip;
      programTips.appendChild(tipItem);
    });
    
    resultsSection.style.display = 'block';
    
    resultsSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  changeLanguage('tr');
});
