import * as fs from 'fs'

export const readAddrCsv = (csvFilePath: any) => {
    let data: string;
    data = fs.readFileSync(csvFilePath, 'utf-8')
    let table = new Array();
    let rows = new Array();
    if (data.includes("\r\n")) {
        rows = data.split("\r\n");
    } else {
        rows = data.split("\n");
    }

    for (var i = 0; i < rows.length; i++) {
        table.push(rows[i].split(","));
    }

    return table;
}

export const getPrivAddr = (table: any[], row: number) => {
    let BobPrivkey = table[row][0]
    let BobAddr = table[row][1]
    return { BobPrivkey, BobAddr }
}
