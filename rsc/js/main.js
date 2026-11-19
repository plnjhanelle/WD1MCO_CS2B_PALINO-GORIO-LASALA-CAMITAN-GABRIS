document.addEventListener('DOMContentLoaded', () => {
    window.cart = [];

    // Inject Cinematic Alert Modal HTML dynamically
    if (!document.getElementById('cinematicAlertModal')) {
        const modalHtml = `
        <div class="modal fade" id="cinematicAlertModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content cinematic-alert-box p-4 text-center">
                    <div class="mb-2"></div>
                    <h4 id="alert-title" class="text-warning mb-3" style="font-family: 'Cinzel Decorative', serif;">Notification</h4>
                    <p id="alert-message" class="text-muted lead mb-4">Message goes here...</p>
                    <button type="button" class="btn btn-flame px-5 py-2 mx-auto" data-bs-dismiss="modal">Acknowledge</button>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    window.showCinematicAlert = function(title, message) {
        document.getElementById('alert-title').innerText = title;
        document.getElementById('alert-message').innerText = message;
        const alertModal = new bootstrap.Modal(document.getElementById('cinematicAlertModal'));
        alertModal.show();
    };

    window.addToCart = function(name, price) {
        window.cart.push({ name, price });
        updateCartBadge();
        updateCartModal();
        showCinematicAlert('Mugen Archive Notice', `Successfully added "${name}" to your Mugen Train Cart! May your blade cut deep.`);
    };

    function updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) badge.innerText = window.cart.length;
    }

    function updateCartModal() {
        const list = document.getElementById('cart-items-list');
        const totalEl = document.getElementById('cart-total');
        if (!list || !totalEl) return;
        if (window.cart.length === 0) {
            list.innerHTML = `<p class="text-muted text-center py-3">Your cart is currently empty.</p>`;
            totalEl.innerText = '₱0.00';
            return;
        }
        let html = '<ul class="list-group list-group-flush bg-transparent">';
        let total = 0;
        window.cart.forEach((item, index) => {
            total += item.price;
            html += `
                <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center border-secondary">
                    <div>
                        <h6 class="mb-0 text-warning">${item.name}</h6>
                        <small class="text-danger">₱${item.price.toLocaleString()}.00</small>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">X</button>
                </li>
            `;
        });
        html += '</ul>';
        list.innerHTML = html;
        totalEl.innerText = `₱${total.toLocaleString()}.00`;
    }

    window.removeFromCart = function(index) {
        window.cart.splice(index, 1);
        updateCartBadge();
        updateCartModal();
    };
});
document.addEventListener('DOMContentLoaded', () => {
    window.cart = [];

    // Inject Cinematic Alert Modal HTML dynamically
    if (!document.getElementById('cinematicAlertModal')) {
        const modalHtml = `
        <div class="modal fade" id="cinematicAlertModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content cinematic-alert-box p-4 text-center">
                    <div class="mb-2" style="font-size: 1.5rem;">🔥 ⚔️ 🔥</div>
                    <h4 id="alert-title" class="mb-3">Notification</h4>
                    <p id="alert-message" class="lead mb-4">Message goes here...</p>
                    <button type="button" class="btn btn-flame px-5 py-2 mx-auto" data-bs-dismiss="modal">Acknowledge</button>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    window.showCinematicAlert = function(title, message) {
        document.getElementById('alert-title').innerText = title;
        document.getElementById('alert-message').innerText = message;
        const alertModal = new bootstrap.Modal(document.getElementById('cinematicAlertModal'));
        alertModal.show();
    };

    window.addToCart = function(name, price) {
        window.cart.push({ name, price });
        updateCartBadge();
        updateCartModal();
        showCinematicAlert('Mugen Archive Notice', `Successfully added "${name}" to your Mugen Train Cart! May your blade cut deep.`);
    };

    function updateCartBadge() {
        const badge = document.getElementById('cart-badge');
        if (badge) badge.innerText = window.cart.length;
    }

    function updateCartModal() {
        const list = document.getElementById('cart-items-list');
        const totalEl = document.getElementById('cart-total');
        if (!list || !totalEl) return;
        if (window.cart.length === 0) {
            list.innerHTML = `<p class="text-muted text-center py-3">Your cart is currently empty.</p>`;
            totalEl.innerText = '₱0.00';
            return;
        }
        let html = '<ul class="list-group list-group-flush bg-transparent">';
        let total = 0;
        window.cart.forEach((item, index) => {
            total += item.price;
            html += `
                <li class="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center border-secondary">
                    <div>
                        <h6 class="mb-0 text-warning">${item.name}</h6>
                        <small class="text-danger">₱${item.price.toLocaleString()}.00</small>
                    </div>
                    <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">X</button>
                </li>
            `;
        });
        html += '</ul>';
        list.innerHTML = html;
        totalEl.innerText = `₱${total.toLocaleString()}.00`;
    }

    window.removeFromCart = function(index) {
        window.cart.splice(index, 1);
        updateCartBadge();
        updateCartModal();
    };
});