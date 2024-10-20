function showTab(tabName) {
    // Hide all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.style.display = 'none';
    });

    // Show the selected tab pane
    document.getElementById(tabName).style.display = 'block';
}
