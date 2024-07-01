export function validateEventCreateInputs(input: string, title: string):boolean {
    try {
        if (!input) throw Error(`${title} must be provided`);
        if (input.length < 1) throw Error(`${title} can't be empty`);
        if (typeof input !== 'string') throw Error(`Wrong type for :${title}`);
        return true;
    } catch (err) {
        console.error('Error [validateEventCreateInputs] ::', err.message)
        return err;
    }
}

export function removeBadChars(str:string):string {
    return str.replace(/[^\w\s]/g, '_');
}

interface BuildEventIDInput {
    name: string
    date: string
    city: string
}

export function buildEventID({name, date, city} : BuildEventIDInput): string {
    const parsedName = removeBadChars(name).replace(' ', "_").toLocaleLowerCase()
    const parsedCity = removeBadChars(city).replace(' ', "_").toLocaleLowerCase()
    const parsedDate = removeBadChars(date).replace(' ', '_').toLocaleLowerCase()
    return `${parsedName}#${parsedCity}#${parsedDate}`
}