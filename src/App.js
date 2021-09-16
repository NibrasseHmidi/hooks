
import React , { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './Components/MovieList';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Caro from './Components/Caro';

function App() {
const [search, setSearch] = useState('');
const [rate, setrateSearch] = useState('');
  const [movies, setMovies]= useState([
     {

        id: Math.random(),
      title: "في عينيّا",
      description: "لطفي مهاجر تونسي في الأربعينيات من عمره. استقر في مرسيليا الفرنسية. يشارك حياته مع صديقته الفرنسية، مونيكا. تنقلب حياة لطفي عندما يدعوه أخوه لزيارة زوجته التونسية التي أصيبت مؤخراً بجلطة دماغية. يتعين على لطفي أن يعود إليها لرعاية طفلهما يوسف، البالغ من العمر تسع سنوات، والذي لم يكن يعرفه أبدًا...",
      posterURL: "https://pictures.artify.tn/media/fjagsqnc57kslterxbc1.jpg",
      annonce :"https://s.3isk.video/watch/movies/film-dabs-watahin-2017-c266n/",
      rate:1,
            
        },
        {
        id:  Math.random(),
      title: "دشرة",
      description: "تسعى كلّ من ياسمين الطّالبة بمعهد الصّحافة وصديقيها وليدو بلال إلى كشف غموض جريمة قديمة اقترفت منذ أكثر من خمس وعشرين سنة. وأثناء هذا البحث يعثرون على امرأة مبتورة الأطراف متروكة لحتفها. وقد أدّى بهم الاستقصاء إلى غابة حيث توجد دشرة معزولة، وفي خضم هذا المحيط المجهول، يحاول هذا الثّلاثي الهروب من الرّعب، فهل ينجحون في الإفلات ؟",
      posterURL: "http://www.webdo.tn/wp-content/uploads/2018/11/Dachra-affiche.jpg ",
      annonce :"https://s.3isk.video/watch/movies/film-miracle-in-cell-no-7-2019/",
             rate:4,
        },
        
        {
        id:  Math.random(),
      title: "باب الفلة",
      description: "يزور الموت متنكرا في زي صحفي جياني، رجل إيطالي مسن يعيش في عزلة في دار للمسنين. قبل إكمال مهمته، يترك الموت بعض الوقت للمريض العجوز ليخبره بالقصة التي عاشها وكتبها في مخطوطة. يسعى في المقام الأول لكشف لغز الجملة التي تركها الإيطالي في كتاباته: كل شيء في باب الفلة.يبدأ جياني في سرد القصة تاركًا اللغز حتى النهاية. فهل سينهي القصة ويصدر نتيجتها أم سيأخذ اللغز معه إلى الأبد ...",
      posterURL: "https://pictures.artify.tn/media/raksomj2u0s6mncruf24.jpg?width=200",
      annonce :"https://s.3isk.video/watch/movies/film-12-siccin-6-2019/",
           rate:5,  
        },
        {
          
        id:  Math.random(),
      title: "ڨيرة ",
      description: "نّ غياب الآلات والتقنيات أو ضعفها في إنتاج الصورة السينمائيّة جعلنا ندبّر هندسة خاصة لهذا العمل نستطيع وضعها بسهولة داخل المواقع المختارة للتصوير نذكر منها: قصبة سيدي بومخلوف، كنيسة الكاف، مستشفى الكاف، إذاعة الكاف، مقبرة الكاف، مقبرة القيروان، الموقع الأثري بمكثر… وهذا الرّسم يمكّن المتفرّج من التطلّع على فلم له عدّة منافذ تسهّل استعاب تسلسل الحركات والمواقف، وهو يعطينا إمكانيّة إنارة متنوّعة و يأطّر الصورة بصفة واضحة و يلزمنا من الناحية الجمالية على ابتكار مشهد مغاير للمعهود يليق بالمرحلة التاريخية التي نعيشها.",
      posterURL: "https://pictures.artify.tn/media/wagasia6y1xl30gydp6l.jpg",
      annonce :"https://s.3isk.video/watch/movies/film-dunya-hali-2018/",
         rate:3,    
        },
        {
          
        id:  Math.random(),
      title: "عزيز روحو",
      description: "تمرّ هند بتجارب حياتيّة مأسويّة حيث تتعرض للاضطهاد من قبل أخيها الأكبر الذي تحوّل من شاب جانح إلى متشدّد دينيّ.",
      posterURL: "https://pictures.artify.tn/media/o87vt7rljduezv8u4htl.jpg",
      annonce :"https://s.3isk.video/watch/movies/film-senden-bana-kalan-2015/",
       rate:2,
            
        },
        
      ]);

     const handleSearch = (e) => {
    setSearch(e.target.value)
  }
       const handleSearchrate = (rate) => {
    setrateSearch(rate)
  }  

   const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie])
  }
  return (
    <>
    <Navigation handleSearch={handleSearch} handleSearchrate={handleSearchrate} handleAddMovie={handleAddMovie}/>
 <Caro/>
        <MovieList movies ={movies.filter((el) => (el.title.match(search.trim()))&&(el.rate >=rate))} />  
     
      <Footer/>
    </>
  );
}

export default App;
