FROM apache/superset:3.1.0-py310

USER root
RUN pip install holidays==0.23 clickhouse-connect shillelagh 'shillelagh[all]'
USER superset

