function toggleCheckbox(selectedCheckbox) {
    document.querySelectorAll('input[name="exclusiveCheckbox"]').forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}
document.querySelector('.dropdown').addEventListener('mouseenter', function() {
    this.classList.add('active');
  });
  
  document.querySelector('.dropdown').addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });