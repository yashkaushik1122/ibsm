var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function addMenuFunctionality() {
    const menuIcon = document.querySelectorAll('.mb-header nav .menu');
    const menuList = document.querySelectorAll('.mb-header .bottom__header');

    menuIcon.forEach(icon => {
        icon.addEventListener('click', () => {
            menuList.forEach(list => {
                list.classList.toggle("show");
            });
        });
    });
}

// Call the function to add menu functionality
addMenuFunctionality();



function addDropdownFunctionality() {
    const questions = document.querySelectorAll('.question');
    let activeAccordion = null;

    questions.forEach(question => {
        const icon = question.querySelector('.icon'); 
        const answer = question.parentElement.nextElementSibling;

        question.addEventListener("click", () => {
            if (activeAccordion && activeAccordion !== question) {
                activeAccordion.querySelector('.icon').classList.remove('active'); 
                activeAccordion.parentElement.nextElementSibling.style.maxHeight = null; 
            }

            if (icon.classList.contains('active')) {
                icon.classList.remove('active'); 
                answer.style.maxHeight = null; 
            } else {
                icon.classList.add('active'); 
                answer.style.maxHeight = answer.scrollHeight + "px"; 
                activeAccordion = question;
            }
        });
    });
}

addDropdownFunctionality();


function closePopupb() {
    document.getElementById('contactpopu').style.display = 'none';
}

}
/*
     FILE ARCHIVED ON 06:09:22 May 25, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:24:34 Jan 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.661
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.014
  cdx.remote: 9.079
  LoadShardBlock: 97.563 (3)
  PetaboxLoader3.datanode: 138.914 (4)
  load_resource: 165.707
  PetaboxLoader3.resolve: 55.681
*/