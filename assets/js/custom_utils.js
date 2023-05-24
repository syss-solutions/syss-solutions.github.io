
/*****************************************************************************************************************************************************************
 * I18N.
 *****************************************************************************************************************************************************************/

/**
 * JSON con las cadenas traducidas a los diferentes idiomas.
 * No hay inglés, por ser el default.
 * 
 * "pt": {
      "SYSS Solutions - Mobile App / Web development": "SYSS Solutions - Desarrollo Web / Aplicaciones Móviles",
      "SYSS Solutions": "SYSS Solutions",
      "Desarrollo Web. Desarrollo de aplicaciones móviles.<br>Soluciones Tecnológicas y de consultoría.":"Desarrollo Web. Desarrollo de aplicaciones móviles.<br>Soluciones Tecnológicas y de consultoría."
    }
 */
frases = {
    "es": {
      "SYSS Solutions - Mobile App / Web development": "SYSS Solutions - Desarrollo Web / Aplicaciones Móviles",
      "SYSS Solutions": "SYSS Solutions",
      "Web Development. Mobile Application Development.<br><br>Technology and Consulting Solutions.":"Desarrollo Web. Desarrollo de aplicaciones móviles.<br><br>Soluciones Tecnológicas y de consultoría.",
      "Who We Are": "Quiénes somos",
      "What We Do": "Qué hacemos",
      "Our Work": "Nuestro Trabajo",
      "Get In Touch": "Hablemos",
      "Calculate the percentile of length, weight, body mass index, and head circumference of your baby or child using the WHO charts.": "Calcula el percentil de longitud, peso, índice de masa corporal y perímetro craneal de tu bebé o niño usando las tablas de la OMS.",
      "<b>Weight, height and head circumference percentiles:</b> Indicate where the subject stands in relation to other children of the same sex and age.": "<b>Percentiles de peso, talla y perímetro craneal:</b> Indican en qué lugar se encuentra el sujeto con respecto a otros niños o niñas de su mismo sexo y edad.",
      "<b>Weight percentiles for height and body mass index:</b> These indexes, by relating weight to the height of the same person, give us a more adequate idea of their nutritional status, whether excess or deficit.": "<b>Percentiles de peso para la altura e índice de masa corporal:</b> Estos índices, al relacionar el peso con la altura de una misma persona, nos dan una idea más adecuada de su estado nutricional, por exceso o déficit.",
      "All calculations are made using World Health Organization (WHO) standards.": "Todos los cálculos se hacen utilizando los estándares de la Organización Mundial de la Salud (OMS).",
      "For more information, please consult the WHO website.": "Para más información, consulta la página de la OMS.",
      "We are in contact through our social media or email.": "Estamos en contacto a través de nuestras redes sociales o correo electrónico.",
      "For any questions or concerns, don't hesitate to write to us!": "Para cualquier duda o cuestión, ¡no dudes en escribirnos!",
      "Twitter": "Twitter",
      "Facebook": "Facebook",
      "Instagram": "Instagram",
      "Github": "Github",
      "Email": "Email",
      "Copyright Syss-Solutions. All Rights Reserved.": "Copyright Syss-Solutions. Todos los derechos reservados.",
      "KiddoCalc": "KiddoCalc",
      "Cookies Policy": "Política de Cookies",
      "Site Map": "Site Map",
      "Privacy Policy": "Aviso legal y política de privacidad",
      "Our website uses cookies to provide your browsing experience and relevant information. Before continuing to use our website, you agree & accept of our Cookie Policy & Privacy.": "Nuestro sitio web utiliza cookies para mejorar la experiencia de usuario. La utilización de nuestro sitio web, implica la aceptación de nuestra política de privacidad y cookies.",
      "Cookie Policy & Privacy": "Política de Privacidad y Cookies",
      "Accept": "Accept",
      "Calculate the percentile of length, weight, body mass index, and": "Calcula el percentil de longitud, peso, índice de masa corporal y",
      "head circumference of your baby or child using the WHO charts.": "perímetro craneal de tu bebé o niño usando las tablas de la OMS.",
      "Learn More": "Saber más",
      "Weight, height and head circumference percentiles": "Percentiles de peso, talla y perímetro craneal",
      "Indicate where the subject stands in relation to other children of the same sex and age.": "Indican en qué lugar se encuentra el sujeto con respecto a otros niños o niñas de su mismo sexo y edad.",
      "Weight percentiles for height and body mass index": "Percentiles de peso para la altura e índice de masa corporal",
      "These indexes, by relating weight to the height of the same person, give us a more adequate idea of their nutritional status, whether excess or deficit.": "Estos índices, al relacionar el peso con la altura de una misma persona, nos dan una idea más adecuada de su estado nutricional, por exceso o déficit.",
      "CompassPro": "CompassPro",
      "CompassPro is the most accurate compass application on Google Play. Use it on your trips, to get to unfamiliar places or when you get lost.": "CompassPro es la aplicación de brújula más precisa en Google Play. Úsala en tus viajes, para llegar a sitios desconocidos o cuando te pierdas.",
      "CompassPro is very easy to use: Just use it like a real compass.": "CompassPro es muy fácil de usar: Úsala como una brújula real."
    }
};

/**
 * Función que cambia todos los elementos al nuevo idioma.
 * 
 * https://es.stackoverflow.com/questions/22339/c%C3%B3mo-hacer-la-internacionalizaci%C3%B3n-de-una-aplicaci%C3%B3n-web
 *
 * @param {string} lang
 */
function cambiarIdioma(lang) {
    // Guarda la preferencia de idioma.
    lang = lang || sessionStorage.getItem('app-lang') || 'en';
    sessionStorage.setItem('app-lang', lang);
  
    var elems = document.querySelectorAll('[data-tr]');
    for (var x = 0; x < elems.length; x++) {
      elems[x].innerHTML = frases.hasOwnProperty(lang)
        ? frases[lang][elems[x].dataset.tr]
        : elems[x].dataset.tr;
    }
}

/*****************************************************************************************************************************************************************
 * COOKIES.
 * 
 * https://codingartistweb.com/2022/01/cookie-consent-banner-html-css-javascript/#google_vignette
 *****************************************************************************************************************************************************************/

let popUp = document.getElementById("cookiePopup");

//When user clicks the accept button
document.getElementById("acceptCookie").addEventListener("click", () => {
  //Create date object
  let d = new Date();
  //Increment the current time by 1 minute (cookie will expire after 1 hour)
  d.setMinutes(60 + d.getMinutes());
  //Create Cookie withname = myCookieName, value = thisIsMyCookie and expiry time=1 minute
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  //Hide the popup
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});

//Check if cookie is already present
const checkCookie = () => {
  //Read the cookie and split on "="
  let input = document.cookie.split("=");
  //Check for our cookie
  if (input[0] == "myCookieName") {
    //Hide the popup
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    //Show the popup
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};

/*****************************************************************************************************************************************************************
 * init.
 *****************************************************************************************************************************************************************/

window.onload = function(){
    cambiarIdioma();
    
    document
      .getElementById('btn-en')
      .addEventListener('click', cambiarIdioma.bind(null, 'en'));

    document
      .getElementById('btn-es')
      .addEventListener('click', cambiarIdioma.bind(null, 'es'));
  
    /*
    document
      .getElementById('btn-pt')
      .addEventListener('click', cambiarIdioma.bind(null, 'pt'));
    */

    //Check if cookie exists when page loads.
    setTimeout(() => {
      checkCookie();
    }, 2000);

}