CREATE PROCEDURE relatorio_diario()
AS $$
BEGIN
    SELECT data_compra, COUNT(*) AS quantidade_de_produtos
    FROM tabela_de_compras
    GROUP BY data_compra;
END;
$$ LANGUAGE plpgsql;