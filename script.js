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


  const fitnessPrograms = {
    zayıf: {
      title: "Kilo Alma ve Kas Geliştirme Programı",
      description: "Bu program, sağlıklı kilo almanıza ve kas kütlenizi artırmanıza yardımcı olacak.",
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
            day: "1. Gün",
            exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8", "Protein açısından zengin beslenme"],
          },
          {
            day: "2. Gün",
            exercises: [
              "Deadlift: 3x8",
              "Overhead Press: 3x8",
              "Pull-ups: 3 set (yapabildiğiniz kadar)",
              "Kalori açısından zengin beslenme",
            ],
          },
        ],
        3: [
          { day: "1. Gün", exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8"] },
          { day: "2. Gün", exercises: ["Deadlift: 3x8", "Overhead Press: 3x8", "Pull-ups: 3 set"] },
          { day: "3. Gün", exercises: ["Leg Press: 3x10", "Incline Press: 3x10", "Lat Pulldown: 3x10"] },
        ],
        4: [
          { day: "1. Gün", exercises: ["Squat: 3x8", "Bench Press: 3x8", "Barbell Row: 3x8"] },
          { day: "2. Gün", exercises: ["Deadlift: 3x8", "Overhead Press: 3x8", "Pull-ups: 3 set"] },
          { day: "3. Gün", exercises: ["Leg Press: 3x10", "Incline Press: 3x10", "Lat Pulldown: 3x10"] },
          { day: "4. Gün", exercises: ["Lunges: 3x10", "Dips: 3x10", "Face Pulls: 3x15", "Calf Raises: 3x15"] },
        ],
        5: [
          { day: "1. Gün", exercises: ["Squat: 4x8", "Bench Press: 4x8", "Barbell Row: 4x8"] },
          { day: "2. Gün", exercises: ["Deadlift: 4x8", "Overhead Press: 4x8", "Pull-ups: 4 set"] },
          { day: "3. Gün", exercises: ["Leg Press: 4x10", "Incline Press: 4x10", "Lat Pulldown: 4x10"] },
          { day: "4. Gün", exercises: ["Lunges: 4x10", "Dips: 4x10", "Face Pulls: 4x15"] },
          {
            day: "5. Gün",
            exercises: ["Front Squat: 3x8", "Close-Grip Bench: 3x8", "T-Bar Row: 3x8", "Calf Raises: 4x15"],
          },
        ],
      },
      tips: [
        "Günlük kalori ihtiyacınızdan 300-500 kalori fazla tüketin",
        "Protein alımınızı artırın (vücut ağırlığınızın her kg'ı için 1.6-2g)",
        "Kompleks karbonhidratlar ve sağlıklı yağlar tüketin",
        "Her öğünde protein içeren besinler yemeye çalışın",
        "Ağırlıkları kademeli olarak artırın (progresif yüklenme)",
      ],
    },
    normal: {
      title: "Kas Tonu ve Genel Fitness Programı",
      description: "Bu program, mevcut formunuzu korurken kas tonunuzu geliştirmenize yardımcı olacak.",
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
            day: "1. Gün",
            exercises: [
              "Full Body Workout: Squat: 3x10",
              "Push-ups: 3x10",
              "Bent-over Row: 3x10",
              "Plank: 3x30 saniye",
            ],
          },
          {
            day: "2. Gün",
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
            day: "1. Gün",
            exercises: [
              "Push: Bench Press: 3x10",
              "Shoulder Press: 3x10",
              "Tricep Extensions: 3x12",
              "Push-ups: 2 set",
            ],
          },
          {
            day: "2. Gün",
            exercises: ["Pull: Pull-ups: 3 set", "Barbell Row: 3x10", "Face Pulls: 3x15", "Bicep Curls: 3x12"],
          },
          {
            day: "3. Gün",
            exercises: ["Legs: Squat: 3x10", "Romanian Deadlift: 3x10", "Leg Press: 3x12", "Calf Raises: 3x15"],
          },
        ],
        4: [
          {
            day: "1. Gün",
            exercises: ["Upper Body: Bench Press: 3x10", "Rows: 3x10", "Shoulder Press: 3x10", "Pull-ups: 3 set"],
          },
          {
            day: "2. Gün",
            exercises: ["Lower Body: Squat: 3x10", "Deadlift: 3x8", "Lunges: 3x10", "Calf Raises: 3x15"],
          },
          {
            day: "3. Gün",
            exercises: ["Push: Incline Press: 3x10", "Dips: 3x10", "Lateral Raises: 3x15", "Tricep Extensions: 3x12"],
          },
          {
            day: "4. Gün",
            exercises: ["Pull: Pull-ups: 3 set", "Barbell Row: 3x10", "Face Pulls: 3x15", "Bicep Curls: 3x12"],
          },
        ],
        5: [
          {
            day: "1. Gün",
            exercises: [
              "Chest & Triceps: Bench Press: 3x10",
              "Incline Press: 3x10",
              "Dips: 3x10",
              "Tricep Extensions: 3x12",
            ],
          },
          {
            day: "2. Gün",
            exercises: [
              "Back & Biceps: Pull-ups: 3 set",
              "Barbell Row: 3x10",
              "Face Pulls: 3x15",
              "Bicep Curls: 3x12",
            ],
          },
          {
            day: "3. Gün",
            exercises: ["Legs: Squat: 3x10", "Romanian Deadlift: 3x10", "Leg Press: 3x12", "Calf Raises: 3x15"],
          },
          {
            day: "4. Gün",
            exercises: [
              "Shoulders: Overhead Press: 3x10",
              "Lateral Raises: 3x15",
              "Front Raises: 3x15",
              "Rear Delt Flies: 3x15",
            ],
          },
          {
            day: "5. Gün",
            exercises: ["Full Body: Deadlift: 3x8", "Push-ups: 3x12", "Pull-ups: 3 set", "Plank: 3x45 saniye"],
          },
        ],
      },
      tips: [
        "Günlük kalori ihtiyacınızı dengeli bir şekilde karşılayın",
        "Protein alımınızı koruyun (vücut ağırlığınızın her kg'ı için 1.4-1.6g)",
        "Dengeli beslenmeye özen gösterin (protein, karbonhidrat, sağlıklı yağlar)",
        "Egzersiz yoğunluğunu kademeli olarak artırın",
        "Düzenli kardiyovasküler egzersizler ekleyin (haftada 2-3 kez, 20-30 dakika)",
      ],
    },
    kilolu: {
      title: "Kilo Verme ve Kondisyon Programı",
      description: "Bu program, sağlıklı kilo vermenize ve genel kondisyonunuzu artırmanıza yardımcı olacak.",
      iconSvg: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f97316; width: 2rem; height: 2rem; margin-bottom: 0.5rem;">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>`,
      days: {
        2: [
          {
            day: "1. Gün",
            exercises: [
              "Yürüyüş: 30 dakika",
              "Squat: 3x12",
              "Push-ups (dizler yerde olabilir): 3x10",
              "Plank: 3x20 saniye",
            ],
          },
          {
            day: "2. Gün",
            exercises: ["Yürüyüş: 30 dakika", "Lunges: 3x10", "Dumbbell Row: 3x12", "Bicycle Crunches: 3x20"],
          },
        ],
        3: [
          {
            day: "1. Gün",
            exercises: [
              "Kardiyovasküler: 30 dakika tempolu yürüyüş veya hafif koşu",
              "Squat: 3x12",
              "Push-ups: 3x10",
              "Plank: 3x30 saniye",
            ],
          },
          {
            day: "2. Gün",
            exercises: [
              "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
              "Lunges: 3x10",
              "Dumbbell Row: 3x12",
              "Russian Twists: 3x20",
            ],
          },
          {
            day: "3. Gün",
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
            day: "1. Gün",
            exercises: [
              "Kardiyovasküler: 30 dakika tempolu yürüyüş",
              "Full Body: Squat: 3x12",
              "Push-ups: 3x10",
              "Dumbbell Row: 3x12",
            ],
          },
          {
            day: "2. Gün",
            exercises: [
              "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
              "Core: Plank: 3x30 saniye",
              "Russian Twists: 3x20",
              "Leg Raises: 3x12",
            ],
          },
          {
            day: "3. Gün",
            exercises: [
              "Kardiyovasküler: 30 dakika tempolu yürüyüş",
              "Lower Body: Lunges: 3x10",
              "Glute Bridge: 3x15",
              "Calf Raises: 3x15",
            ],
          },
          {
            day: "4. Gün",
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
            day: "1. Gün",
            exercises: [
              "Kardiyovasküler: 30 dakika tempolu yürüyüş",
              "Lower Body: Squat: 3x12",
              "Lunges: 3x10",
              "Glute Bridge: 3x15",
            ],
          },
          {
            day: "2. Gün",
            exercises: [
              "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
              "Upper Body: Push-ups: 3x10",
              "Dumbbell Row: 3x12",
              "Lateral Raises: 3x15",
            ],
          },
          {
            day: "3. Gün",
            exercises: [
              "Kardiyovasküler: 30 dakika tempolu yürüyüş",
              "Core: Plank: 3x30 saniye",
              "Russian Twists: 3x20",
              "Bicycle Crunches: 3x20",
            ],
          },
          {
            day: "4. Gün",
            exercises: [
              "HIIT: 20 dakika (30 saniye çalışma, 30 saniye dinlenme)",
              "Full Body: Squat: 3x12",
              "Push-ups: 3x10",
              "Dumbbell Row: 3x12",
            ],
          },
          {
            day: "5. Gün",
            exercises: [
              "Kardiyovasküler: 45 dakika tempolu yürüyüş veya hafif koşu",
              "Stretching ve Mobility çalışması: 15 dakika",
            ],
          },
        ],
      },
      tips: [
        "Günlük kalori ihtiyacınızdan 300-500 kalori az tüketin",
        "Protein alımınızı koruyun (vücut ağırlığınızın her kg'ı için 1.6-2g)",
        "İşlenmiş gıdalar ve şekerli içeceklerden kaçının",
        "Su tüketiminizi artırın (günde en az 2-3 litre)",
        "Düzenli kardiyovasküler egzersizler yapın",
        "Ağırlık antrenmanlarını ihmal etmeyin (kas kütlesi metabolizmanızı hızlandırır)",
      ],
    },
  };

  
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
      contactForm.reset();
    });
  }

 
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
      showError("Lütfen boy ve kilo değerlerinizi girin.");
      return;
    }

   
    const heightInM = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    
    if (isNaN(heightInM) || isNaN(weightInKg) || heightInM <= 0 || weightInKg <= 0) {
      showError("Lütfen geçerli boy ve kilo değerleri girin.");
      return;
    }

  
    const bmiValue = weightInKg / (heightInM * heightInM);
    const bmiValueRounded = parseFloat(bmiValue.toFixed(1));

   
    let category;
    if (bmiValue < 18.5) {
      category = "zayıf";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      category = "normal";
    } else {
      category = "kilolu";
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
      case 'zayıf':
        bmiCategory.className = 'bmi-category text-blue';
        break;
      case 'normal':
        bmiCategory.className = 'bmi-category text-green';
        break;
      case 'kilolu':
        bmiCategory.className = 'bmi-category text-orange';
        break;
    }
    
 
    const program = fitnessPrograms[category];
    programTitle.textContent = program.title;
    programDescription.textContent = program.description;
    programIcon.innerHTML = program.iconSvg;
    programDays.textContent = `Haftalık Program (${daysPerWeek} gün)`;
    
    
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
});
