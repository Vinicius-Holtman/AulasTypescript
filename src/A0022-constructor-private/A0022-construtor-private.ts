// Sigleton - GoF | Factory Method - GoF
export class Database {
    private static database: Database

    private constructor(
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Connnect: ${this.host}, ${this.user}, ${this.password}`);
    }

    static getDatabase(host: string, user: string, password: string): Database {
        if (Database.database) {
            console.log('Retornando instância já criada')
            return Database.database
        }
        console.log('Criando nova instância')
        Database.database = new Database(host, user, password)
        return Database.database
    }
}

const db1 = Database.getDatabase('Localhost', 'root', '123456');
db1.connect()

const db2 = Database.getDatabase('Localhost', 'root', '123456');
db2.connect()

const db3 = Database.getDatabase('Localhost', 'root', '123456');
db3.connect()

const db4 = Database.getDatabase('Localhost', 'root', '123456');
db4.connect()