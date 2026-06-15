const letterData = {
  // 1. HARD DAYS (10 listov)
  hard: [
    { id: "h1", label: "today feels impossible", title: "Open when today feels impossible", content: "Hey,\nIf you're opening this, I'm guessing today isn't going very well.\nWhatever happened, I'm sorry you're carrying it right now.\nYou don't have to get through tomorrow right now. Just focus on the next few minutes.\nDrink some water. Take a breath. The world will survive if you slow down." },
    { id: "h2", label: "you've cried a lot", title: "Open when you've cried a lot", content: "Hey,\nCrying doesn’t mean you’re falling apart.\nIt means something inside you has been holding too much for too long.\nLet yourself breathe a little slower now. Wipe your face, drink some water.\nYou don’t have to fix how you feel immediately. It means you’re still human." },
    { id: "h3", label: "you're exhausted", title: "Open when you're exhausted", content: "Hey,\nBeing tired isn’t a failure.\nIt’s a sign you’ve been carrying too much for too long without enough pause.\nAnd you’re allowed to pause.\nRight now, you’re not required to be productive. Unclench your jaw. Take a break." },
    { id: "h4", label: "feel like giving up", title: "Open when you feel like giving up", content: "Hey,\nFeeling like giving up is a feeling. It is not a decision.\nIt is what happens when you’ve been trying for too long without seeing it get better.\nRight now, I don’t need you to solve your life. I just need you to stay.\nEven the really heavy feelings shift." },
    { id: "h5", label: "everything is too much", title: "Open when everything is too much", content: "Hey,\nToo many thoughts, too many expectations.\nI want you to stop trying to hold all of it for a moment.\nPut your feet on the ground. Notice five things you can see.\nYou are not failing, you are just overwhelmed. Slow it down." },
    { id: "h6", label: "feel misunderstood", title: "Open when you feel misunderstood", content: "Hey,\nYou don’t have to be perfectly understood to be valid.\nYour feelings don’t become less real just because someone else doesn’t fully see them.\nYou’re not overreacting. You don’t have to defend how you feel here." },
    { id: "h7", label: "you're disappointed", title: "Open when you're disappointed", content: "Hey,\nSomething probably didn’t go the way you hoped. Disappointment is not proof that you failed.\nIt’s just proof that you cared about something.\nThings not working out doesn’t erase effort. This is just a temporary part of your story." },
    { id: "h8", label: "you're angry", title: "Open when you're angry", content: "Hey,\nAnger usually shows up when something feels unfair. It makes sense that you feel this way.\nBut pause for a second. Give your body a moment to come down from the intensity.\nYou don’t have to respond right away. This feeling will pass." },
    { id: "h9", label: "you're scared", title: "Open when you're scared", content: "Hey,\nFear is just an alarm system, not a prediction of the future.\nTake a second to ground yourself. You are safe right now, in this exact minute.\nYou have faced intimidating situations before and survived. You are resilient." },
    { id: "h10", label: "need a break", title: "Open when you need a break", content: "Hey,\nThis is your official permission to just stop. Drop whatever you are doing.\nPushing through constant stress isn't strength, it's just exhausting.\nGo make a hot drink, listen to a song, and give your mind a chance to catch up." }
  ],

  // 2. LATE NIGHT LETTERS (10 listov)
  night: [
    { id: "n1", label: "it's 2 AM", title: "Open when it's 2 AM", content: "Hey,\nIt's the middle of the night and your mind is awake. The silence makes thoughts sound loud.\nTry to gently cut yourself some slack. Nothing can be fixed or solved at 2 AM anyway.\nYour only job right now is to breathe in and out." },
    { id: "n2", label: "can't sleep", title: "Open when you can't sleep", content: "Hey,\nTossing and turning is frustrating. The more you force it, the harder it is.\nDon't panic about tomorrow. Just focus on the warmth of your blanket.\nListen to the rhythm of your breathing. Sleep will find you when you stop chasing it." },
    { id: "n3", label: "thoughts won't stop", title: "Open when your thoughts won't stop", content: "Hey,\nYour brain is on a loop. Imagine your mind as a crowded room and you're just standing by the door.\nYou don't have to engage with every single thought. Leave the problems unfinished tonight.\nThey will still be there tomorrow when you have more strength." },
    { id: "n4", label: "staring at the ceiling", title: "Open when you're staring at the ceiling", content: "Hey,\nWaiting for your mind to shut down is an empty feeling.\nInstead of counting hours, try to imagine a place where you feel completely calm.\nThink about a quiet walk or a funny moment. Rest your mind, even if your eyes won't close yet." },
    { id: "n5", label: "lonely tonight", title: "Open when you're lonely tonight", content: "Hey,\nLate night loneliness distorts reality. It makes you forget how many people value you.\nYou are connected to people who care about you deeply, even if they are asleep right now.\nThis night is temporary. I am sending you a warm thought through the dark." },
    { id: "n6", label: "need comfort", title: "Open when you need comfort", content: "Hey,\nMake your physical space as cozy as possible. Wrap your blanket tightly around you.\nYou don't have to be strong every hour of the day.\nLet this be a quiet reassurance that you are safe, you are okay, and you can just rest." },
    { id: "n7", label: "miss someone", title: "Open when you miss someone", content: "Hey,\nMissing someone at night can feel like a dull ache.\nBut it is proof that you have the capacity to connect deeply with others.\nHold onto the good memories. Distance and time don't change the value of those moments." },
    { id: "n8", label: "night feels too quiet", title: "Open when the night feels too quiet", content: "Hey,\nWhen the lack of noise makes everything seem amplified, put on some ambient sounds.\nA low playlist or a familiar podcast can help. You don't have to sit in the absolute quiet.\nSilence isn't an empty space to be feared; it's just the world taking a break." },
    { id: "n9", label: "need company", title: "Open when you need company", content: "Hey,\nConsider this letter a small conversation between us. I'm right here in these words.\nThink about our inside jokes or random discussions.\nWrite down a random message for me now, send it, and I'll answer as soon as I'm awake." },
    { id: "n10", label: "you're overthinking", title: "Open when you're overthinking", content: "Hey,\nStop. Take a mental step back. Your mind is building worst-case scenarios.\nYou cannot predict how everything will play out. Let the thoughts go.\nTell yourself: 'I have done enough for today, and I will handle the rest when it arrives.'" }
  ],

  // 3. LITTLE COMFORTS (10 listov)
  comfort: [
    { id: "c1", label: "need a hug", title: "Open when you need a hug", content: "Hey,\nSince I can't give you a real hug right now, close your eyes and take a deep breath.\nImagine the kind of hug that makes you feel safe and lets you drop all tension.\nConsider this letter a physical version of that. You deserve to feel comforted." },
    { id: "c2", label: "hear something nice", title: "Open when you need to hear something nice", content: "Hey,\nJust in case nobody has told you today: you are a genuinely wonderful person.\nYou have a unique way of looking at the world, and your presence makes a real difference.\nYour flaws don't outweigh the light you bring into the lives of others." },
    { id: "c3", label: "need reassurance", title: "Open when you need reassurance", content: "Hey,\nIf you are feeling uncertain about where you are in life, listen to me: you are doing fine.\nThere is no master script you are falling behind on. Everyone is figuring things out.\nYou are exactly where you need to be. Trust your timeline." },
    { id: "c4", label: "feel forgotten", title: "Open when you feel forgotten", content: "Hey,\nIt's a lonely feeling, but feelings aren't always facts. You are not forgotten.\nYou are tucked away in the thoughts of people who care, even when life gets chaotic.\nYou matter to me, and your existence is an important part of my world." },
    { id: "c5", label: "doubting yourself", title: "Open when you're doubting yourself", content: "Hey,\nYour mind is playing tricks, whispering that you aren't capabale enough. Don't believe it.\nLook back at your track record. Think of all the difficult days you got through.\nYou figured it out then, and you have the exact same capability to figure it out now." },
    { id: "c6", label: "need kindness", title: "Open when you need kindness", content: "Hey,\nThe world can feel harsh and demanding. If you haven't encountered much kindness today, let it start here.\nTreat yourself gently. Lower your expectations for today. Speak to yourself like a true friend.\nBe kind to your own heart." },
    { id: "c7", label: "feel invisible", title: "Open when you feel invisible", content: "Hey,\nIt hurts when you feel like nobody notices your efforts. But your value doesn't decrease.\nThe right people see you, appreciate you, and are glad you are around.\nYou don't need a crowd to notice you for your presence to matter." },
    { id: "c8", label: "need a smile", title: "Open when you need a smile", content: "Hey,\nI hope this letter brings a small smile to your face.\nRemember that time we laughed at something completely stupid? Life is full of those moments.\nDon't let the heavy stuff make you forget that fun and light moments are always ahead." },
    { id: "c9", label: "feeling insecure", title: "Open when you're feeling insecure", content: "Hey,\nInsecurity makes us look at everyone else's highlights while looking at our own flaws.\nStop comparing. You are bringing something to the table that nobody else can.\nYou are completely enough just as you are right now." },
    { id: "c10", label: "seeking peace", title: "Open when you're seeking peace", content: "Hey,\nLet go of the things you cannot control. You can't fix everything today.\nLet the world spin on its own for a while. Focus on this exact quiet moment.\nPeace isn't the absence of trouble, it's the ability to find calm inside yourself." }
  ],

  // 4. GOOD DAYS (10 listov)
  good: [
    { id: "g1", label: "made you smile", title: "Open when something made you smile", content: "Hey,\nI love that you're opening this because of a smile! Hold onto that exact feeling.\nWhatever it was, let it fill up your whole day.\nSave this feeling in your memory bank so you can remind yourself how light life can feel!" },
    { id: "g2", label: "proud of yourself", title: "Open when you're proud of yourself", content: "Hey,\nYes! You should be proud. Whether it was a massive achievement or just getting out of bed.\nCelebrate your wins, because you worked hard for them.\nRemember this feeling of accomplishment—you earned every bit of it." },
    { id: "g3", label: "had a great day", title: "Open when you had a great day", content: "Hey,\nI'm so incredibly happy that today was a good day for you. You deserve days like this.\n Soak in the good mood, enjoy the energy, and let it carry over into tomorrow.\nLife has beautiful moments, and today was proof." },
    { id: "g4", label: "excited about something", title: "Open when you're excited", content: "Hey,\nThat rush of excitement is the best feeling ever! Keep that enthusiasm going.\nWhatever you are looking forward to, I hope it turns out amazing.\nIt's great to see you inspired and eager for what's coming next." },
    { id: "g5", label: "felt motivated", title: "Open when you're feeling motivated", content: "Hey,\nRide that wave of productivity! Use this spark to do what you love or finish what you started.\nWhen you feel driven like this, you can achieve anything.\nKeep moving forward while the energy is high!" },
    { id: "g6", label: "something went right", title: "Open when something went right", content: "Hey,\nFinally! It's so satisfying when pieces fall into place.\nTake a moment to appreciate that things worked out in your favor.\nYou deserve this win, so enjoy the relief and the good outcome." },
    { id: "g7", label: "good news arrived", title: "Open when you got good news", content: "Hey,\nAmazing! I am celebrating this good news with you from afar.\nIt's wonderful when things turn around and bring positive updates.\nShare the joy, be happy, and let this news brighten up your week." },
    { id: "g8", label: "felt peaceful today", title: "Open when you feel peaceful", content: "Hey,\nA calm mind is a beautiful thing. I'm glad today brought you a sense of serenity.\nNo rush, no stress, just steady peace. Keep this feeling close to you.\nIt's a gentle reminder of how good quiet moments can be." },
    { id: "g9", label: "laughed out loud", title: "Open when you laughed out loud", content: "Hey,\nLaughing until your stomach hurts is the absolute best medicine.\nKeep that joy alive! Remember what caused it because laughter makes everything lighter.\nI hope your day stays full of humor and fun." },
    { id: "g10", label: "grateful for today", title: "Open when you feel grateful", content: "Hey,\nGratitude turns what we have into enough. It's beautiful that you're noticing the good stuff.\nFocusing on small blessings makes life feel so much richer.\nI am grateful to have you around too." }
  ],

  // 5. MEMORIES (10 listov)
  memories: [
    { id: "m1", label: "remember us", title: "Open when you want to remember us", content: "Hey,\nTake a look back at the connection we've built through every conversation and story.\nA really solid bond has grown between us.\nGenuine friendships are built on mutual respect and enjoying each other's presence. This stays." },
    { id: "m2", label: "random late chats", title: "Open when you think of our chats", content: "Hey,\nRemember those random late-night conversations about everything and nothing?\nThose moments where we just talked without filtering anything are the best.\nIt's great to have someone you can share random thoughts with at any hour." },
    { id: "m3", label: "inside jokes", title: "Open when you remember inside jokes", content: "Hey,\nWe have shared some truly ridiculous jokes that nobody else would ever understand.\nJust thinking about those silly moments always brings a smile.\nThanks for bringing so much fun and humor into my life." },
    { id: "m4", label: "first conversation", title: "Open when you think of the start", content: "Hey,\nIt's wild to look back at how we first started talking compared to how close we are now.\nEvery great connection starts with a simple 'hi', and I'm so glad we had ours.\nLook how far we've come since then!" },
    { id: "m5", label: "shared secrets", title: "Open when you remember our trust", content: "Hey,\nTrust is hard to find, but knowing we can share things safely means a lot.\nThank you for always listening without judgment and keeping things real.\nYour trust is something I truly value and protect." },
    { id: "m6", label: "silly arguments", title: "Open when we disagree on things", content: "Hey,\nEven when we argue about stupid things or have completely different opinions, it's fine.\nTrue bonds don't break over small disagreements—they just make things more interesting.\nThanks for always keeping it real with me." },
    { id: "m7", label: "supportive moments", title: "Open when you remember the help", content: "Hey,\nRemember the times we lifted each other up when things were dragging us down?\nKnowing there's someone in your corner makes a massive difference.\nI won't forget the support, and I'm always here to return it." },
    { id: "m8", label: "songs we shared", title: "Open when a song reminds you", content: "Hey,\nMusic has a way of locking in memories. Whenever a certain track plays, it triggers thoughts of our chats.\nSharing music is like sharing a piece of your vibe.\nHope whatever you're listening to right now is putting you in a great mood." },
    { id: "m9", label: "time passed by", title: "Open when you realize how long", content: "Hey,\nTime flies by so fast when you have good people around you.\nWe've collected so many days of chatting and staying in touch.\nIt's a steady, solid part of routine that I've grown to really appreciate." },
    { id: "m10", label: "looking back", title: "Open when you appreciate the past", content: "Hey,\nEvery shared memory is a building block of this connection.\nLooking back just makes me glad that our paths crossed.\nHere's to all the moments we've shared so far, and to the ones yet to come." }
  ],

  // 6. SPECIAL (10 listov)
  special: [
    { id: "s1", label: "your birthday", title: "Open on your birthday", content: "Hey,\nHappy Birthday! Today is completely about you. Celebrate it your way.\nHaving you around makes life infinitely better. You bring so much value to people.\nMay this upcoming year bring you immense success, peace, and laughter!" },
    { id: "s2", label: "new year's eve", title: "Open on New Year's Eve", content: "Hey,\nAnother year is wrapping up! Leave the mistakes behind and take the lessons with you.\nThank you for being part of my year. I hope the next chapter brings you amazing things.\nCheers to new beginnings and another year of connection!" },
    { id: "s3", label: "random milestone", title: "Open when you reach a goal", content: "Hey,\nCongratulations on hitting this milestone! Big or small, progress is progress.\nYou put in the work, you stayed consistent, and now you're seeing results.\nKeep that same momentum going for the next big target!" },
    { id: "s4", label: "a rainy sunday", title: "Open on a rainy Sunday", content: "Hey,\nPerfect weather to do absolutely nothing. Grab a blanket, put on a movie, and relax.\nSundays are meant for recharging your battery before the week resets.\nDon't feel guilty about taking it easy today. Enjoy the cozy vibes." },
    { id: "s5", label: "exam or big test", title: "Open before a big day", content: "Hey,\nYou've prepared for this, so take a deep breath and trust your brain.\nA single test doesn't define your entire worth, so don't let anxiety take over.\nGo in there, do your absolute best, and get it over with. You got this!" },
    { id: "s6", label: "holiday season", title: "Open during the holidays", content: "Hey,\nHoping your holiday season is full of good food, warmth, and peaceful days.\nTake a break from the usual routine, enjoy the time off, and rest up.\nSending you nothing but good energy and holiday vibes!" },
    { id: "s7", label: "tough choice ahead", title: "Open when making a decision", content: "Hey,\nWhen facing a crossroads, overthinking makes it harder. Trust your gut feeling.\nYou are smart enough to make the right call for your own life.\nWhatever you choose, you'll adapt and handle it. Have faith in yourself." },
    { id: "s8", label: "feeling lucky", title: "Open when luck is on your side", content: "Hey,\nWhen things randomly go your way, enjoy the streak! Good timing is great.\nUse this positive momentum to start something new or take a shot at a challenge.\nKeep that winning mindset active today!" },
    { id: "s9", label: "fresh start", title: "Open on a Monday morning", content: "Hey,\nNew week, clean slate. Let go of whatever dragged you down last week.\nYou have a fresh set of days to make things happen or just do better.\nStart today with a clear head and a steady pace. Make it a good one." },
    { id: "s10", label: "just because", title: "Open just because...", content: "Hey,\nNo specific reason for this letter, just a random reminder that you are appreciated.\nI hope whatever you are doing right now is going smoothly and you're safe.\nKeep being yourself, because you're doing a fantastic job at it." }
  ]
};

const letters = {};

function generateShelf() {
  Object.keys(letterData).forEach(category => {
    const shelf = document.getElementById(`cat-${category}`);
    if (!shelf) return;

    letterData[category].forEach(item => {
      letters[item.id] = { title: item.title, content: item.content };

      const envItem = document.createElement('div');
      envItem.className = 'envelope-item';
      envItem.setAttribute('onclick', `openLetter('${item.id}')`);

      let sealClass = 'wax-seal';
      if (item.id === 's1') sealClass += ' highlight';

      envItem.innerHTML = `
        <div class="envelope">
          <div class="${sealClass}"></div>
          <span class="env-label">${item.label}</span>
        </div>
      `;
      shelf.appendChild(envItem);
    });
  });

  letters['secret'] = { title: "Special Note", content: "Thank you for being part of this life. Thank you for every conversation, every laugh, and every single memory. Happy one year of friendship." };
  
  const secretItem = document.createElement('div');
  secretItem.className = 'envelope-item hidden';
  secretItem.id = 'secret-envelope';
  secretItem.setAttribute('onclick', "openLetter('secret')");
  secretItem.innerHTML = `
    <div class="envelope">
      <div class="wax-seal secret-seal"></div>
      <span class="env-label">just for us</span>
    </div>
  `;
  document.getElementById('cat-special').appendChild(secretItem);
}

let bearClicks = 0;

function showShelf() {
  document.getElementById('intro-screen').classList.remove('active');
  setTimeout(() => {
    document.getElementById('shelf-screen').classList.add('active');
  }, 400);
}

function openLetter(id) {
  const modal = document.getElementById('letter-modal');
  const container = document.querySelector('.parchment-container');
  const title = document.getElementById('letter-title');
  const content = document.getElementById('letter-content');

  title.innerText = letters[id].title;
  content.style.whiteSpace = 'pre-line';
  content.innerText = letters[id].content;

  modal.style.visibility = 'visible';
  setTimeout(() => {
    container.style.height = '480px';
  }, 50);
}

function closeLetter() {
  const container = document.querySelector('.parchment-container');
  const modal = document.getElementById('letter-modal');

  container.style.height = '0';
  setTimeout(() => {
    modal.style.visibility = 'hidden';
  }, 600);
}

function handleBearClick() {
  bearClicks++;
  if (bearClicks === 5) {
    const secretEnv = document.getElementById('secret-envelope');
    if (secretEnv) {
      secretEnv.classList.remove('hidden');
      secretEnv.style.opacity = '0';
      setTimeout(() => {
        secretEnv.style.transition = 'opacity 0.5s ease';
        secretEnv.style.opacity = '1';
      }, 50);
      
      const specialShelf = document.getElementById('cat-special');
      specialShelf.scrollTo({ left: specialShelf.scrollWidth, behavior: 'smooth' });
    }
  }
}

window.onload = generateShelf;