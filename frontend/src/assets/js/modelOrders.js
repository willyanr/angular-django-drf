document.addEventListener("DOMContentLoaded", function() {
  var navListItems = document.querySelectorAll('.nav-tabs li a'),
      allWells = document.querySelectorAll('.tab-pane'),
      allNextBtn = document.querySelectorAll('.next-step'),
      allPrevBtn = document.querySelectorAll('.prev-step');

  allWells.forEach(function(well) {
      well.style.display = 'none';
  });

  navListItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
          e.preventDefault();
          var targetId = this.getAttribute('href').slice(1),
              target = document.getElementById(targetId);

          if (!this.parentElement.classList.contains('disabled')) {
              navListItems.forEach(function(navItem) {
                  navItem.parentElement.classList.remove('active');
              });
              this.parentElement.classList.add('active');
              allWells.forEach(function(well) {
                  well.style.display = 'none';
              });
              target.style.display = 'block';
              target.querySelector('input').focus();
          }
      });
  });

  allNextBtn.forEach(function(btn) {
      btn.addEventListener('click', function() {
          var curStep = this.closest(".tab-pane"),
              curStepBtn = curStep.id,
              nextStepWizard = document.querySelector('.nav-tabs li.active').nextElementSibling.children[0];

          nextStepWizard.click();
      });
  });

  allPrevBtn.forEach(function(btn) {
      btn.addEventListener('click', function() {
          var curStep = this.closest(".tab-pane"),
              curStepBtn = curStep.id,
              prevStepWizard = document.querySelector('.nav-tabs li.active').previousElementSibling.children[0];

          prevStepWizard.click();
      });
  });

  document.querySelector('.nav-tabs li:first-child a').click();
});
