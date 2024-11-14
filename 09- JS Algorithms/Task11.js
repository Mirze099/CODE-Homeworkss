function find(temperatur, saat) {
    if (temperatur > 30 && saat >= 12 && saat <= 15) {
        return "Çimərlik geyimi geyinin və üzməyə gedin.";
    } else if (temperatur >= 20 && temperatur <= 30 && saat >= 6 && saat < 12) {
        return "Yüngül idman geyimi geyinin və qaçışa çıxın.";
    } else if (temperatur >= 10 && temperatur < 20) {
        return "Gödəkçə geyinin və gəzintiyə çıxın.";
    } else if (temperatur < 10 && saat >= 18 && saat <= 24) {
        return "Qalın palto geyinin və evdə qalın.";
    }
}

console.log(find(75, 15));
