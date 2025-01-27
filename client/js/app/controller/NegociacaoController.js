class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document); 
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        let helper = new DateHelper();
        helper.textoParaData(this._inputData.value);
    
        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputValor.value,
            this._inputValor.value
        );
       
        
        console.log(negociacao);
        console.log(helper.dataParaTexto(negociacao.data));
    }   
}