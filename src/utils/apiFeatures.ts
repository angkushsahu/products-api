import { IProduct } from "../types";

class ApiFeatures {
    query = {} as IProduct[];
    queryString = {} as any;
    constructor(query: any, queryString: any) {
        this.query = query;
        this.queryString = queryString;
    }

    searchProducts() {
        const type = this.queryString?.type;
        if (!type) return this;

        if (typeof type === "string") {
            this.query = this.query.filter(
                (product) =>
                    product._id.toLowerCase().includes(type) ||
                    product.name.toLowerCase().includes(type) ||
                    product.category.toLowerCase().includes(type)
            );
        }

        return this;
    }

    filterProducts() {
        const tempQuery = { ...this.queryString };
        const removeFields = ["type", "page", "limit"];
        removeFields.forEach((field) => delete tempQuery[field]);

        if (tempQuery.lte) {
            this.query = this.query.filter((product) => product.price <= tempQuery.lte);
        }
        if (tempQuery.gte) {
            this.query = this.query.filter((product) => product.price >= tempQuery.lte);
        }

        return this;
    }

    pagination(resultPerPage: number) {
        const currentPage = Number(this.queryString?.page) || 1;
        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.slice(skip);
        const queryLength = this.query.length;
        this.query.length = queryLength < resultPerPage ? queryLength : resultPerPage;
        return this;
    }
}

export default ApiFeatures;
