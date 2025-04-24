{
    const d1 = new Date();
    document.getElementById('date1').innerHTML = d1;

    const f_d1 = new Date('2006 4 16');
    document.getElementById('fixed_date1').innerHTML = f_d1;

    const f_d2 = new Date('April 16 , 2006 5:30:00')
    document.getElementById('fixed_date2').innerHTML = f_d2;

    const n_d1 = new Date(2006, 3, 16, 5, 30, 0);
    document.getElementById('number_date1').innerHTML = n_d1;

    const m_date = new Date(1111111111111);
    document.getElementById('mili_date').innerHTML = m_date;

    const mathod_date = new Date('2006 april 16');
    const m_d = mathod_date.toDateString();
    document.getElementById('mathod_date').innerHTML = m_d;
}