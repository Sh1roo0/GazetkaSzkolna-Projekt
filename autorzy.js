function openModal(name, age, desc) {
            document.getElementById('modal-title').textContent = name;
            document.getElementById('modal-age').textContent = "Wiek: " + age + " lat";
            document.getElementById('modal-desc').textContent = desc;
            document.getElementById('modal-backdrop').style.display = 'flex';
        }
        document.getElementById('modal-close').onclick = function () {
            document.getElementById('modal-backdrop').style.display = 'none';
        };
        window.onclick = function (e) {
            if (e.target === document.getElementById('modal-backdrop')) {
                document.getElementById('modal-backdrop').style.display = 'none';
            }
        }