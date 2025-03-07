function toggleCheckbox(selectedCheckbox) {
    document.querySelectorAll('input[name="exclusiveCheckbox"]').forEach((checkbox) => {
        if (checkbox !== selectedCheckbox) {
            checkbox.checked = false;
        }
    });
}