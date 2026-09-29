class SmartLampe {
    constructor(name) {
        this.name = name;
        this.istAn = false;
    }

    umschalten() {
        if (!this.istAn) {
            this.istAn = true;
        } else {
            this.istAn = false;
        }
    }
}

const meinelampe = new SmartLampe("Wohnzimmer-Lampe");

const statusAnzeige = document.getElementById("status-anzeige");
const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", () => {
    meinelampe.umschalten();
    if (meinelampe.istAn) {
        statusAnzeige.textContent = "AN";
        statusAnzeige.classList.remove("aus");
        statusAnzeige.classList.add("an");
        toggleBtn.textContent = "Ausschalten";
    } else {
        statusAnzeige.textContent = "AUS";
        statusAnzeige.classList.remove("an");
        statusAnzeige.classList.add("aus");
        toggleBtn.textContent = "Einschalten";
    }
});
