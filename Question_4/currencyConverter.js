const convert = (price) =>
{   
    let container = [];
    container.push(price)
    
    let display = container.find(e =>
    {
        if (e.includes('GBP'))
        {
            let getPrice = parseInt(e)
            const priceInDollard = getPrice * 0.73;

             const priceInCedis = priceInDollard * 6.05

              console.log(` ${priceInCedis} GHS`)
        } else if (e.includes('CAD'))
        {
             let getPrice = parseInt(e)
            const priceInDollard = getPrice * 1.26;

             const priceInCedis = priceInDollard * 6.05

              console.log(` ${priceInCedis} GHS`)
        } else if (e.includes('CNY'))
        {
              let getPrice = parseInt(e)
            const priceInDollard = getPrice * 6.46;

             const priceInCedis = priceInDollard * 6.05

              console.log(` ${priceInCedis} GHS`)
        } else if (e.includes('GHS'))
        {
              let getPrice = parseInt(e)
            const priceInDollard = getPrice * 6.46;
              console.log(` ${priceInDollard} GHS`)
        } else
        {
            
            console.log(`please enter a valid currency between GBP CAD CNY GHS`)
        }
    })
    return display
}

convert('100GBP')