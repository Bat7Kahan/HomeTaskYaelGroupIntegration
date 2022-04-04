/// <reference path="jquery-3.6.0.js" />

$(() => {
    $("#inputDate").on("change", async function (){
        const inputDate = new Date(this.value);
        try {
            const url = `https://www.hebcal.com/converter?cfg=json&gy=${inputDate.getFullYear()}&gm=${inputDate.getMonth()+1}&gd=${inputDate.getDate()}&g2h=1`;
            const hebrewDate = await get_hebrew_date(url);
            $('#outputDate').text(hebrewDate.hebrew);
        }
        catch (error) {
            console.log(error);
        }
    });



    function get_hebrew_date(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: "GET",
                url: url,
                success: data => resolve(data),
                error: e => reject(e),
            });
        });
    }

});

