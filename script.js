function filter(cat, btn) {
    // 1. UI: Set active button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. Logic: Show/Hide cards and reset flips
    document.querySelectorAll('.feature-card').forEach(card => {
        card.classList.remove('flipped'); // Reset flip when filtering
        
        if (cat === 'all' || card.dataset.cat === cat) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function toggleFlip(card) {
    card.classList.toggle('flipped');
}