import React, { useState, useEffect } from 'react';
import './index.css'

const FarmarciaInfo = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    };

    return (
        <div className="conteudoUm-container">
            <p>
                Farmarcia: Nova Direção e Muitas Novidades!
                <br /><br />
                Estamos entusiasmados em anunciar uma nova fase na Farmarcia! Sob uma nova direção, nossa farmácia está passando por uma transformação emocionante e queremos compartilhar todas as novidades com você. Prepare-se para uma nova experiência de compra, com um ambiente renovado e uma série de novos produtos!
                <br /><br />
                <strong>Convite para a Inauguração</strong>
                <br />
                Para marcar o início desta nova etapa, temos o prazer de convidá-lo para a nossa grande inauguração! Venha celebrar conosco e descubra todas as novidades que preparamos. Será uma ocasião especial com ofertas exclusivas e muitas surpresas!
                <br /><br />
                <strong>Data:</strong> {formatDate(dateTime)}
                <br />
                <strong>Horário:</strong> {formatTime(dateTime)}
                <br /><br />
                <strong>Novidades da Farmarcia</strong>
                <br />
                Nossa nova fase traz uma série de novidades, incluindo:
                <br /><br />
                <strong>Camisas Exclusivas</strong>
                <br />
                Estamos lançando uma linha de camisas exclusivas da Farmarcia! Essas camisas são mais do que apenas um item de vestuário; são uma forma de mostrar seu apoio à nossa farmácia e ao nosso novo visual. Disponíveis em vários tamanhos e cores, as camisas são perfeitas para quem quer estar na moda e, ao mesmo tempo, apoiar nossa marca. Venha conferir e adquirir a sua durante a inauguração!
                <br /><br />
                <strong>Cartões Personalizados</strong>
                <br />
                Para tornar sua experiência ainda mais especial, apresentamos nossos novos cartões personalizados da Farmarcia. Esses cartões não são apenas funcionais, mas também um lindo item de colecionador. Perfeitos para presentear ou para uso pessoal, os cartões estão disponíveis em diversas versões e designs, refletindo a nova identidade da nossa farmácia. Adquira o seu e aproveite os benefícios exclusivos que ele oferece!
                <br /><br />
                <strong>Placas Informativas e Decorativas</strong>
                <br />
                Nosso espaço agora conta com placas informativas e decorativas que destacam nossos produtos e serviços de uma forma moderna e atraente. As placas foram projetadas para facilitar a navegação em nossa farmácia e tornar sua experiência de compra mais agradável. Elas também adicionam um toque de estilo ao nosso ambiente renovado. Venha ver como essas placas ajudam a criar um ambiente mais acolhedor e eficiente!
                <br /><br />
                <strong>Venha Conhecer Nossa Nova Farmarcia</strong>
                <br />
                Estamos muito animados com as mudanças e mal podemos esperar para recebê-lo em nossa nova casa. Não perca a chance de ver todas as melhorias e novidades em primeira mão.
                <br /><br />
                Agradecemos a sua contínua fidelidade e apoio. Esperamos vê-lo na nossa inauguração e na Farmarcia em breve!
                <br /><br />
                Equipe Farmarcia
            </p>
        </div>
    );
};

export default FarmarciaInfo;
