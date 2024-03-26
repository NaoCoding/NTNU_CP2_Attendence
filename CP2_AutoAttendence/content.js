window.onload=function(){
    STUDENTID = "41247001S"
        NAME = '盧昱安'
        today = new Date(); 
        y = today.getFullYear()
        m = String(today.getMonth() + 1).padStart(2, '0')
        d = String(today.getDate()).padStart(2, '0')
        URL = "https://docs.google.com/forms/d/e/1FAIpQLSfdSvXsgOHaCmgXz2jDB5Oppyw1TV85n4zKlHPcGyMjshXGRQ/viewform?entry.1778384647="+STUDENTID+"&entry.1951187407="+NAME+"&entry.421658988_year="+y+"&entry.421658988_month="+m+"&entry.421658988_day="+d+"&entry.1681062224=實體上課"
    window.location.replace(URL);
}