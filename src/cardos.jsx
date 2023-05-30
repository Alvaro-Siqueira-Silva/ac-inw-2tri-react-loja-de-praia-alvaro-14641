import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Cardooos(){
    return(
        <div>

<CardGroup>
      <Card bg="dark" text="light">
        <Card.Img variant="top" className='image' src="https://www.guller.com.br/5275-home_default/shot-praia-moda-ver%C3%A3o-com-estampa-camuflada-masculino-amarra%C3%A7%C3%A3o-bolso.jpg" />
        <Card.Body>
          <Card.Title>Overwear</Card.Title>
          <Card.Text>
            Bermudas, calções de banho, cangas, camisetas e tudo de importante para ter conforto e estilo na praia 
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="dark" text="light">
        <Card.Img variant="top" className='image' src="https://s2.glbimg.com/f3I2Yygw5vrw1mROXZWmC_hRDFQ=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/o/t/iWBiaMRnyiCX3FhiVtuQ/2018-01-28-gl071-26-27-glamourices-historia-do-maio.jpg" />
        <Card.Body>
          <Card.Title>Swimsuits</Card.Title>
          <Card.Text>
            Sungas, bikinis e maiôs de alta qualidade e conforto para seu aproveitamento máximo fora e dentro da água
          </Card.Text>
        </Card.Body>
      </Card>
      <Card bg="dark" text="light">
        <Card.Img variant="top" className='image' src="https://images-americanas.b2w.io/produtos/6038357849/imagens/chapeu-de-praia-feminino-paris-aba-larga-palha-luxo/6038357873_1_large.jpg" />
        <Card.Body>
          <Card.Title>Acessórios</Card.Title>
          <Card.Text>
            Chapéus, bolsas, toalhas, chinelos e entre outros acessórios das tendências do verão  
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <div className='bomba'></div>
        </div>
    )
}

export default Cardooos